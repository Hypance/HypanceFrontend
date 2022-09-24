import React from 'react'
import './input.css' 
function Input({type,placeHolder,onChange,onChangeCheckbox}) {
  return (
    <div>
        <input className='input' type = {type} placeHolder={placeHolder} onChange={onChange} onChangeCheckbox={onChangeCheckbox} />
    </div>
  )
}

export default Input