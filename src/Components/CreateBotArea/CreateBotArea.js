import React, { useState, useEffect } from "react";
import SummaryBox from "../SummaryBox/SummaryBox";
import * as BS from "react-bootstrap";
import "./CreateBotArea.css";
import {baseURL} from "../../Constants/constant";
import axios from "axios";

function CreateBotArea() {
  const [form, setForm] = useState({
    botName: "",
    botDescription: "",
    predefinedMarket: "",
    priceStrategy: "",
    tradeType: "",
    assets: "",
    strategy: "",
    formation: "",
    trendStrategy: "",
    priceVolume: "",
  });

  const postCreateBot = (e) => {
    e.preventDefault();
      axios
      .post(baseURL(), form)
      .then((response) => {
        alert("Success");
      }).catch((err)=>{
        alert("Error");
      });
  };

  const [assetList, setAssets] = useState([]);
  useEffect(() => {
    async function fetchData() {
      var config = {
        method: "get",
        url: baseURL("Symbol/GetAll"),
      };
      axios(config)
        .then(function (response) {
          setAssets(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // Trigger the fetch
    fetchData();
  }, []);

  return (
    <div>
      <BS.Row className="row">
        <BS.Col sm="9" md="10">
          <h1>Create Your Bot</h1>
          <BS.Row>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Bot Name</BS.Form.Label>
                <BS.Form.Control
                  className="input"
                  type="text"
                  value={form.botName}
                  placeholder="Give a name to your bot"
                  onChange={(e) => {
                    setForm({ ...form, botName: e.target.value });
                  }}
                />
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Bot Description</BS.Form.Label>
                <BS.Form.Control
                  className="input"
                  type="text"
                  value={form.botDescription}
                  placeholder="..."
                  onChange={(e) => {
                    setForm({ ...form, botDescription: e.target.value });
                  }}
                />
              </BS.Form.Group>
            </BS.Col>
          </BS.Row>
          <BS.Row>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Market</BS.Form.Label>
                <BS.Form.Select className="input" aria-label="Default select example">
                  <option value="0">SPOT</option>
                  <option value="1">MARKET</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Order Type</BS.Form.Label>
                <BS.Form.Select className="input" aria-label="Default select example">
                  <option value="0">MARKET</option>
                  <option value="1">LIMIT</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Position Type</BS.Form.Label>
                <BS.Form.Select className="input" aria-label="Default select example">
                  <option value="0">DEFAULT</option>
                  <option value="1">BUY-LONG</option>
                  <option value="2">SELL-SHORT</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Assets</BS.Form.Label>
                <BS.Form.Select className="input" aria-label="Default select example">
                  {assetList.map((asset) => {
                    return (
                      <option key={asset.id} value={asset.id}>
                        {asset.name}
                      </option>
                    );
                  })}
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy</BS.Form.Label>
                <BS.Form.Select className="input" aria-label="Default select example">
                  <option value="0">RSI 14</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
            <BS.Form.Group className="mb-3">
                <BS.Form.Label>Trend Strategy</BS.Form.Label>
                <BS.Form.Select className="input" aria-label="Default select example">
                  <option value="0">Up Trend</option>
                  <option value="1">Down trend</option>
                  <option value="2">Horizontal</option>
                </BS.Form.Select>
              </BS.Form.Group>
              {/* <BS.Form.Group className="mb-3">
                <BS.Form.Label>Formation</BS.Form.Label>
                <BS.Form.Select className="input" aria-label="Default select example" multiple>
                  <option value="0">1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </BS.Form.Select>
              </BS.Form.Group> */}
              {/* <BS.Form.Group className="mb-3">
                <BS.Form.Label>Price Volume</BS.Form.Label>
                <BS.Form.Select className="input" aria-label="Default select example">
                  <option value="0">25%</option>
                  <option value="1">50%</option>
                  <option value="2">75%</option>
                  <option value="3">100%</option>
                </BS.Form.Select>
              </BS.Form.Group> */}
            </BS.Col>
          </BS.Row>
          <BS.Button className="button" onClick={postCreateBot}>
            Create a Bot
          </BS.Button>
        </BS.Col>
        <BS.Col sm="3" md="2">
          <SummaryBox />
        </BS.Col>
      </BS.Row>
    </div>
  );
}

export default CreateBotArea;
