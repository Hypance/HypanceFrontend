import React, { useState } from "react";
import * as BS from "react-bootstrap";
import brokenicon from "../../images/Vector.png"

function SideBar() {
  const [isActive, setIsActive] = useState(false)
  const handleClick = event => {
      setIsActive(!isActive);
  };
  return (
    <div>
      <div>
        <h2 className="hypance">Hypance</h2>
        <img className="brokenicon" src={brokenicon} alt="brokenicon" />
        <p className="overview">OVERVIEW</p>
        <p className="other">OTHER</p>
      </div>
      <nav>
        <ul className="fa-ul layout">
          <li>
            <BS.NavLink className={isActive ? "dashboard" : "dashboard"} onClick={handleClick} href="dashboard">
              <span className="icon">&#8962;</span>Dashboard
            </BS.NavLink>
          </li>{" "}
          <br />
          <li>
            <BS.NavLink className="dashboard" href="market">
              <span className="icon">&#2814;</span> Market
            </BS.NavLink>
          </li>{" "}
          <br />
          <li>
            <BS.NavLink className="dashboard" href="strategy">
              <span className="icon">&#x21AF;</span>Strategy
            </BS.NavLink>
          </li>{" "}
          <br />
          <li>
            <BS.NavLink className="dashboard" href="bot">
              <span className="icon">&#128435;</span>Bot
            </BS.NavLink>
          </li>{" "}
          <br />
          <li>
            <BS.NavLink className="dashboard" href="backtest">
              <span className="icon">&#9883;</span>Backtest
            </BS.NavLink>
          </li>{" "}
          <br />
          <li>
            <BS.NavLink className="dashboard" href="alerts">
              <span className="icon">&#9888;</span>Alerts
            </BS.NavLink>
          </li>{" "}
          <br />
          <li>
            <BS.NavLink className="dashboard" href="trades">
              <span className="icon">&#9878;</span> Trades
            </BS.NavLink>
          </li>{" "}
          <br />
          <li>
            <BS.NavLink className="dashboard" href="portfolios">
              <span className="icon">&#10064;</span>Portfolios
            </BS.NavLink>
          </li>{" "}
          <br />
          <div className="others">
            <li>
              <BS.NavLink className="dashboard" href="settings">
                <span className="icon">&#9881;</span> Settings
              </BS.NavLink>
            </li>{" "}
            <br />
            <li>
              <BS.NavLink className="dashboard" href="logout">
                <span className="icon">&#10162;</span> Logout
              </BS.NavLink>
            </li>{" "}
            <br />
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
