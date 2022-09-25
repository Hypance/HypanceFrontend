import React from 'react'
import "./Input.css"


export default function Input({type,placeHolder,onChange,name}) {
  return (
    <div>
      <input className='input' name = {name} type={type} placeholder = {placeHolder} onChange={onChange} />
    </div>
     
  )
   
}
