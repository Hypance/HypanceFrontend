import React from "react";
import "./TopBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Form } from "react-bootstrap";
import dollar from "./dollar.png";
// import btc from "./btc.png";
import avatar from "./avatar.jpg";
import zil from "./bell.jpg";
function TopBar() {
  return (
    <div className='topBar'>
      <div className="SearchBar">
        <div className="Search">
          <Form>
            <Form.Control className="Search" type="search" placeholder="Search" aria-label="Search" />
          </Form>{" "}
        </div>
      </div>

      <div>
        <span className="space2"></span>
        <span className="Cryptos">Cryptos:</span>
        <span className="CryptosData">27,200</span>
        <span className="space"></span>
        <span className="Cryptos">Exchanges:</span>
        <span className="CryptosData">520</span>
        <span className="space"></span>
        <span className="Cryptos">Dominance:</span>
        <span className="CryptosData">BTC 39.7%</span>
      </div>
      <div className="mt-8">
        <div className="box">
          <img alt="" src={dollar} width="18" height="18" />
          {"USD"}
          <NavDropdown id="nav-dropdown-dark-example" title="" menuVariant="white">
            <NavDropdown.Item href="#action/3.1">
              <img alt="" src={dollar} width="18" height="18" />
              {"TRY"}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <img alt="" src={dollar} width="18" height="18" />
              {"BTC"}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <img alt="" src={dollar} width="18" height="18" />
              {"ETH"}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Choose a currency</NavDropdown.Item>
          </NavDropdown>
        </div>
        </div>
        <div className="ntfc">
          <div className="bell">
            <img alt="bell" src={zil} width="18" height="18" />
          </div>
        </div>
        <div className="Avatar">
          <img alt="avatar" src={avatar} width="44" height="44" />
        </div>
      </div>
      );
}

      export default TopBar;
