import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/user.action";
import LoginItem from "./LoginItem";

const Login = ({ setOpenLogin }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
  return (
    <>
      <LoginItem
        onMailHandle={onMailHandle}
        onPassHandle={onPassHandle}
        onSubmitHandle={onSubmitHandle}
        mail={mail}
        password={password}
        setOpenLogin={setOpenLogin}
      />
    </>
  );
};

export default Login;
