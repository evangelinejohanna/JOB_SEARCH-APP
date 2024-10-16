import React from 'react'

const Input = ({type,name,placeholder,id,onChange,value,checked}) => {
  return (
    <div className='input-text'>
        <input type={type} placeholder={placeholder} name={name} id={id} onChange={onChange} value={value} checked={checked}  />
    </div>
  )
}

export default Input;