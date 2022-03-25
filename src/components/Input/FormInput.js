import React from "react";

const FormInput = ({ item, state, onChangeInputHandler, onBlurRegex }) => {
  return (
    <div className="signup-field-item">
      <label>{item.label}</label>
      <input
        className={`payment-information-form-input ${
          !state[item.name].checked &&
          state[item.name].onBlur &&
          "payment-input-error"
        }`}
        type={
          item.name === "password" || item.name === "confirmPassword"
            ? "password"
            : "text"
        }
        name={item.name}
        value={state[item.name].value}
        onChange={onChangeInputHandler}
        onBlur={onBlurRegex}
      />
    </div>
  );
};

export default FormInput;
