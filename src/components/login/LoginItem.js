import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
const LoginItem = ({
  onMailHandle,
  onPassHandle,
  onSubmitHandle,
  mail,
  password,
  setOpenLogin,
}) => {
  const navigate = useNavigate();
  const onSignUpPageHandle = () => {
    setOpenLogin(false);
    navigate("/registrarse");
  };
  return (
    <div className="login-form-container">
      <div className="login-form-close">
        <IoCloseSharp
          size={32}
          color="#353535"
          style={{ cursor: "pointer" }}
          onClick={() => setOpenLogin(false)}
        />
      </div>
      <form onSubmit={onSubmitHandle} className="login-form">
        <label>MAIL</label>
        <Input name="mail" value={mail} onChange={onMailHandle} />
        <label>CONTRASEÑA</label>
        <Input name="password" value={password} onChange={onPassHandle} />
        <input type="submit" value={"INGRESAR"} />
      </form>
      <h4 onClick={onSignUpPageHandle}>¿Aún no tienes cuenta? Crear cuenta.</h4>
    </div>
  );
};

export default LoginItem;
