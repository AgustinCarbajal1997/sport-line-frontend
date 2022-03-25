import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../store/actions/user.action";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user.dataUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      if (location?.state?.from) return navigate(location.state.from);
      navigate("/");
    }
  }, [user, navigate, location]);
  const onMailHandle = (e) => {
    setMail(e.target.value);
  };
  const onPassHandle = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(login({ mail, password }));
  };
  const onClickRedirectSignUp = () => {
    let path = location?.state?.from || "/";
    navigate("/registrarse", path);
  };
  return (
    <div className="div-page-login">
      <div className="login-form-container">
        <div className="login-form-container-icon">
          <BiUserCircle size={80} color="#353535" />
        </div>
        <form onSubmit={onSubmitHandle} className="login-form">
          <label>MAIL</label>
          <input type="text" name="mail" value={mail} onChange={onMailHandle} />
          <label>CONTRASEÑA</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onPassHandle}
          />
          <input type="submit" value={"INGRESAR"} />
        </form>
        <h4 className="login-form-sign-up" onClick={onClickRedirectSignUp}>
          ¿No tienes cuenta? Registrarse.
        </h4>
      </div>
    </div>
  );
};

export default Login;
