import React from 'react'
import InputArea from '../InputArea/InputArea';
import SelectList from '../SelectList/SelectList';

function CreateStrategyArea() {
  return (
    <div>
        <h2>CreateStrategyArea</h2>
        <h4>Strategy Name</h4>
        <InputArea></InputArea>
        <h4>Strategy Description</h4>
        
        <InputArea></InputArea>
        <h3>Signal Options</h3>
        <h4>Signal Name</h4>
      
        <InputArea></InputArea>
        <h4>Period</h4>
        <InputArea></InputArea>
        
        <SelectList></SelectList>
        </div>
  );
}

export default CreateStrategyArea