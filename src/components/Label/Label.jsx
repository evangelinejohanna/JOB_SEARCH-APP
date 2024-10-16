import React from "react";

const Label = ({label,id}) =>{
    return(
        <label htmlFor={id}>{label}</label>
    )
}
export default Label;

