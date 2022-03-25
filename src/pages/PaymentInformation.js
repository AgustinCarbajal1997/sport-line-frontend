import React, { useState, useEffect } from "react";
import DATA_INPUTS from "../components/paymentInformation/DataInputs";
import FormContainer from "../components/signup/FormContainer";
import REGULAR_EXPRESSION from "../utils/constants/regex_payment_info";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../utils/constants/url";
import { useSelector } from "react-redux";
const PaymentInformation = () => {
  const [dataForm, setDataForm] = useState(null);
  const user = useSelector((state) => state.user.dataUser);
  const access_token = useSelector((state) => state.user.access_token);

  useEffect(() => {
    if (!user) return;
    const createState = Object.values(DATA_INPUTS).reduce((ac, item) => {
      const keyword = item.name;
      return {
        ...ac,
        [keyword]: {
          value: user[keyword] ?? "",
          onBlur: false,
          checked: !!user[keyword],
        },
      };
    }, {});
    setDataForm(createState);
  }, [user]);

  const onSubmitHandle = async (state) => {
    const dataBuyer = Object.keys(state).reduce(
      (obj, item) => ({ ...obj, [item]: state[item].value }),
      {}
    );
    try {
      const response = await fetch(`${BASE_URL}/api/cart/confirmPurchase`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ ...dataBuyer }),
      });
      const data = await response.json();
      if (!response.ok) {
        console.log(data);
        const error = {
          status: response.status,
          message: "Ocurrio un error, intente nuevamente",
        };
        throw error;
      }
      window.location.href = data.dataPayment.init_point;
    } catch (error) {
      toast.error("¡Ha ocurrido un error! Intente nuevamente más tarde.", {
        style: {
          backgroundColor: "#383838",
          color: "#ffffff",
        },
      });
    }
  };

  return (
    <div className="payment-container">
      {dataForm && (
        <>
          <FormContainer
            initialState={dataForm}
            dataInputs={DATA_INPUTS}
            regexValidation={REGULAR_EXPRESSION}
            onSignUpHandle={onSubmitHandle}
            title={"Datos de pago y envío"}
            classname={"payment"}
            submitMessagge={"CONFIRMAR COMPRA"}
          />
          <div style={{ position: "fixed" }}>
            <ToastContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentInformation;
