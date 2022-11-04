import React, { useState, useEffect } from "react";
import CBASummaryBox from "../SummaryBox/CreateBotAreaSummaryBox/CBASummaryBox";
import * as BS from "react-bootstrap";
import "./CreateBotArea.css";
import Bot from "../../Models/bot.model";
import * as urls from "../../Constants/constant";
import { getData, postData } from "../../Helper/crud";

function CreateBotArea() {
  const [bot, setBot] = useState(new Bot());

  const postCreateBot = (e) => {
    e.preventDefault();
    console.log(bot);
    var result = postData(urls.createBotUrl, bot);
    console.log(result);
  };

  const [assetList, setAssets] = useState([]);
  const [marketList, setMarkets] = useState([]);
  const [orderTypeList, setOrderType] = useState([]);
  const [positionTypeList, setPositionType] = useState([]);
  const [strategyList, setStrategies] = useState([]);
  const [trendStrategyList, setTrendStrategies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const assets = await getData(urls.getSymbolUrl);
      setAssets(assets);

      const markets = await getData(urls.getMarketUrl);
      setMarkets(markets);

      const orderTypes = await getData(urls.getOrderTypeUrl);
      setOrderType(orderTypes);

      const positionTypes = await getData(urls.getPositionTypeUrl);
      setPositionType(positionTypes);

      const strategies = await getData(urls.getStrategiesUrl);
      setStrategies(strategies);

      const trendStrategies = await getData(urls.getTrendStrategies);
      setTrendStrategies(trendStrategies);
    }
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
                  value={bot.name}
                  placeholder="Give a name to your bot"
                  onChange={(e) => {
                    bot.name = e.target.value;
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
                  value={bot.description}
                  placeholder="Give a description to your bot"
                  onChange={(e) => {
                    bot.description = e.target.value;
                  }}
                />
              </BS.Form.Group>
            </BS.Col>
          </BS.Row>
          <BS.Row>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Market</BS.Form.Label>
                <BS.Form.Select
                  className="input"
                  onChange={(e) => {
                    bot.market = Number(e.target.value);
                  }}
                >
                  {marketList.map((market) => {
                    return (
                      <option key={market.value} value={market.value}>
                        {market.text}
                      </option>
                    );
                  })}
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Order Type</BS.Form.Label>
                <BS.Form.Select
                  className="input"
                  onChange={(e) => {
                    bot.orderType = Number(e.target.value);
                  }}
                >
                  {orderTypeList.map((ordertype) => {
                    return (
                      <option key={ordertype.value} value={ordertype.value}>
                        {ordertype.text}
                      </option>
                    );
                  })}
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>

            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Assets</BS.Form.Label>
                <BS.Form.Select
                  name="assets"
                  className="input"
                  multiple
                  onChange={(e) => {
                    const selected =
                      e.target.querySelectorAll("option:checked");
                    const values = Array.from(selected).map((el) =>
                      Number(el.value)
                    );
                    bot.assetIds = values;
                  }}
                >
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
                <BS.Form.Select
                  className="input"
                  multiple
                  onChange={(e) => {
                    const selected =
                      e.target.querySelectorAll("option:checked");
                    const values = Array.from(selected).map((el) =>
                      Number(el.value)
                    );
                    bot.strategyIds = values;
                  }}
                >
                  {strategyList.map((strategy) => {
                    return (
                      <option key={strategy.id} value={strategy.id}>
                        {strategy.name}
                      </option>
                    );
                  })}
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Position Type</BS.Form.Label>
                <BS.Form.Select
                  className="input"
                  onChange={(e) => {
                    bot.positionType = Number(e.target.value);
                  }}
                >
                  {positionTypeList.map((positionType) => {
                    return (
                      <option
                        key={positionType.value}
                        value={positionType.value}
                      >
                        {positionType.text}
                      </option>
                    );
                  })}
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Trend Strategy</BS.Form.Label>
                <BS.Form.Select
                  className="input"
                  onChange={(e) => {
                    bot.trendStrategy = Number(e.target.value);
                  }}
                >
                  {trendStrategyList.map((trend) => {
                    return (
                      <option key={trend.value} value={trend.value}>
                        {trend.text}
                      </option>
                    );
                  })}
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
          <CBASummaryBox />
        </BS.Col>
      </BS.Row>
    </div>
  );
}

export default CreateBotArea;
