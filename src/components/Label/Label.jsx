import React from "react";

const Label = ({ id, label }) => {
  return (
    <div className="label-text">
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default Label;
