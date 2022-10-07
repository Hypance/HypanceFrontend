import React from 'react'
import './MultipleSelectList.css'

export default function MultipleSelectList() {
  return (

    
    <div>
        <label htmlFor="">Trend Strategy</label> <br />
        <select className='MultipleSelect' name="cars" id="cars" multiple>
            <option value="volvo">Select a trend strategy</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
    </div>
  )
}
