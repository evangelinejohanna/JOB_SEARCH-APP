import React from "react";

const Button = ({ children, className, onClick, label, style }) => {
  return (
    <button onClick={onClick} label={label} className={className} style={style}>
      {children}
      {label}
    </button>
  );
};

export default Button;
