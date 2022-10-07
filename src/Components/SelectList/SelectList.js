import React, { useState } from 'react'
import './SelectList.css'

export default function SelectList() {
    const [setIndicatorState] = useState();
  return (

    <div>
        <h4 className="indicators">Indicators</h4>
      <select  className="indicators_input"  
        onChange={(e) => {
          const selectedIndicator = e.target.value;
          setIndicatorState(selectedIndicator);
        }}
      >
        <option value="" disabled selected hidden>Select a indicator</option>
        <option value="adx">Adx</option>
        <option value="bollinger">Bollinger</option>
        <option value="cmf">Cmf</option>
        <option value="dpo">Dpo</option>
        <option value="movingaverage">MovingAverage</option>
        <option value="rsi">Rsi</option>
        <option value="tsi">Tsi</option>
        <option value="williams">Williams</option>
      </select>
    </div>
  )
}

