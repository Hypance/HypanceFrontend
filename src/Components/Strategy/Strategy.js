import React from "react";
import { Button, NavLink } from "react-bootstrap";
import "./Strategy.css";

function Strategy() {
  return (
    <div className="d-flex align-items-center justify-content-between mt-5">
      <h2>Strategy</h2>
      <NavLink className="btn btn-primary d-inline p-3" href="/createStrategyArea">+ Create Strategy</NavLink>
    </div>
  );
}

export default Strategy;
