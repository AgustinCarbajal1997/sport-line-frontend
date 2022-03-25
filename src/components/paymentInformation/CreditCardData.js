import React from "react";
import Cards from "react-credit-cards";
import DATA_INPUTS_CC from "./DataInputsCC";
const CreditCardData = ({ dataCard, handleInputChange, handleInputFocus }) => {
  return (
    <div id="PaymentForm" className="div-paymentInfo-container">
      <Cards
        cvc={dataCard.cvc}
        expiry={dataCard.expiry}
        focused={dataCard.focus}
        name={dataCard.name}
        number={dataCard.number}
      />
      <form className="form-paymentInfo-container">
        {DATA_INPUTS_CC.map((item, idx) => (
          <input
            type="tel"
            name={item.name}
            placeholder={item.placeholder}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            key={idx}
          />
        ))}
      </form>
    </div>
  );
};

export default CreditCardData;
