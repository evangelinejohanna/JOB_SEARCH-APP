import React from "react";

const Modal = ({ children, isOpen, onClose, style }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={style}>
        <button className="close-button" onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
