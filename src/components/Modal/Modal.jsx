import React from "react";

const Modal = ({ isOpen, onClose, children, className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {/* <div className="modal-content" style={style}> */}
      <div className={`modal-container ${className}`}>
        {children}
        <button className="close-button" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Modal;
