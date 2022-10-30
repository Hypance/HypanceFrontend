import React, { useState } from "react";
import "./ToggleVisibility.css"

export default function ToggleVisibility({ children }) {


  const [show, setShow] = useState("show");

  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "<" : ">";

  return (
    <div className="component-container">
      {show && children}
      <button className="closebutton" onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}