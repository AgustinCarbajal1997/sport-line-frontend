import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DATA_INPUTS from "../components/signup/DataInputs";
import FormContainer from "../components/signup/FormContainer";
import INITIAL_FORM_STATE from "../components/signup/InitialFormState";
import { signup } from "../store/actions/user.action";
import REGULAR_EXPRESSION from "../utils/constants/regex_signup";
import { useNavigate, useLocation } from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const inputFile = useRef();
  const user = useSelector((state) => state.user.dataUser);
  const onSignUpHandle = (state) => {
    const dataUser = Object.keys(state).reduce(
      (obj, item) => ({ ...obj, [item]: state[item].value }),
      {}
    );
    const formData = new FormData();
    for (const key in dataUser) {
      formData.append(key, dataUser[key]);
    }
    formData.append("image", inputFile.current.files[0], "image.jpg");
    dispatch(signup(formData));
  };

  useEffect(() => {
    if (user) {
      if (location?.state) return navigate(location.state);
      navigate("/");
    }
  }, [user, navigate, location]);

  return (
    <div className="signup-container">
      <FormContainer
        initialState={INITIAL_FORM_STATE}
        dataInputs={DATA_INPUTS}
        regexValidation={REGULAR_EXPRESSION}
        onSignUpHandle={onSignUpHandle}
        title={"Datos del usuario"}
        classname={"signup"}
        submitMessagge={"Registrar"}
      >
        <div>
          <label>Cargar una imagen</label>
          <input
            ref={inputFile}
            type="file"
            name="image"
            accept="image/jpg"
            required={true}
          />
        </div>
      </FormContainer>
    </div>
  );
};

export default SignUp;
