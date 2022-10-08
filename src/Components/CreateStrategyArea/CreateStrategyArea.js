import React,{useState} from "react";
import SummaryBox from "../SummaryBox/SummaryBox";
import * as BS from "react-bootstrap";


function CreateStrategyArea() {
  const [form, setForm] = useState({
    strategyName: '',
    strategyDescription: '',
    signalName: '',
    period: '',
    indicator: '',
    setting: '',
    strategyTrend: '',
  });

const postCreateStrategy = (e)=>{
  e.preventDefault();
  console.log(form);
}

  return (
    <div>
      <BS.Row className='row'>
      <BS.Col sm="9" md="10">
          <h2>CreateStrategyArea</h2>
          <BS.Row>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy Name</BS.Form.Label>
                <BS.Form.Control type="text" value={form.strategyName} placeholder="Enter Strategy Name" onChange={e => { setForm({ ...form, strategyName: e.target.value }); }} />
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy Description</BS.Form.Label>
                <BS.Form.Control type="text" value={form.strategyDescription} placeholder="Enter Strategy Description" onChange={e => { setForm({ ...form, strategyDescription: e.target.value }); }}/>
              </BS.Form.Group>
            </BS.Col>
          </BS.Row>

          <h2>Signal Options</h2>
          <BS.Row>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Signal Name</BS.Form.Label>
                <BS.Form.Control type="text" value={form.signalName} placeholder="Enter Signal Name" onChange={e => { setForm({ ...form, signalName: e.target.value }); }}/>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Period</BS.Form.Label>
                <BS.Form.Control type="number" value={form.period} placeholder="Enter Period" onChange={e => { setForm({ ...form, period: e.target.value }); }}/>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Indicator</BS.Form.Label>
                <BS.Form.Select aria-label="Default select example">
                  <option value="RSI">RSI</option>
                  <option value="MACD">MACD</option>
                  <option value="EMA">EMA</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Setting</BS.Form.Label>
                <BS.Form.Select aria-label="Default select example">
                  <option value="1">Above</option>
                  <option value="2">Below</option>
                  <option value="3">Crosses Over</option>
                  <option value="4">Crosses Under</option>
                  <option value="5">Equal</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Interval</BS.Form.Label>
                <BS.Form.Select aria-label="Default select example">
                  <option value="0">1d</option>
                  <option value="1">3d</option>
                  <option value="2">5d</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy Trend</BS.Form.Label>
                <BS.Form.Select aria-label="Default select example">
                  <option value="BUY">BUY</option>
                  <option value="SELL">SELL</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col>
            {/* <BS.Col md="6">
              <BS.Form.Group className="mb-3">
                <BS.Form.Label>Strategy Trend</BS.Form.Label>
                <BS.Form.Select aria-label="Default select example" multiple>
                  <option>Open this select menu</option>
                  <option value="BUY">BUY</option>
                  <option value="SELL">SELL</option>
                </BS.Form.Select>
              </BS.Form.Group>
            </BS.Col> */}
          </BS.Row>
          <BS.Button onClick={postCreateStrategy}>Create Strategy</BS.Button>
        </BS.Col>
        <BS.Col sm="3" md="2">
          <SummaryBox />
        </BS.Col>
      </BS.Row>
    </div>
  );
}

export default CreateStrategyArea;
