import React from "react";

const Input = ({
  type,
  name,
  placeholder,
  id,
  onChange,
  value,
  checked,
  className,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        checked={checked}
        className={className}
      />
    </div>
  );
};

export default Input;
