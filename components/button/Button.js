import React from 'react'
import './button.css'
function Button({onClick}) {
  return (
    <div>
        <button className='buton' onClick={onClick}> Log In </button>
    </div>
  )
}

export default Button