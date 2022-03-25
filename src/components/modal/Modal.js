import React from "react";

const Modal = ({ children, setModal }) => {
  return (
    <div className="model-container">
      {children}{" "}
      <div className="button-container-modal">
        <button className="button-modal" onClick={() => setModal(false)}>
          FILTRAR
        </button>
      </div>
    </div>
  );
};

export default Modal;
