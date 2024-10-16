import React from "react";

const Button = ({children, className, onClick, label}) =>{
    return(
        
        <button onClick={onClick} label={label} className={className}> 
            {children}
            {label}
        </button>
    );
};

export default Button; 