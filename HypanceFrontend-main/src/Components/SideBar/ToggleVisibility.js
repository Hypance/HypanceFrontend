import React, { useState } from "react";
import "./ToggleVisibility.css"

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState("show");

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "<" : ">";

  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}