import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./Components/Home/Home";
import NameBar from "./Components/NameBar/NameBar";
import TopBar from "./Components/TopBar/TopBar";
import SummaryBox from "./Components/SummaryBox/SummaryBox";
import CreateStrategyArea from "./Components/CreateStrategyArea/CreateStrategyArea";
import CreateBotArea from "./Components/CreateBotArea/CreateBotArea";
import SideBar from "./Components/SideBar/SideBar";
import Strategy from "./Components/Strategy/Strategy";
import * as BS from "react-bootstrap";
import ToggleVisibility from "./Components/SideBar/ToggleVisibility";
import ForgotPassword from "./Components/LogIn/ForgotPassword/ForgotPassword"

function App() {
  return (
    <div className="container-fluid">
      <BS.Row>
        <BS.Col md="3">
          <ToggleVisibility>
            <SideBar></SideBar>
          </ToggleVisibility>
        </BS.Col>
        <BS.Col md="9">
          <BS.Row className="p-3">
            <TopBar></TopBar>
          </BS.Row>
          <BS.Row className="p-3">
            <BrowserRouter>
              <Routes>
                <Route index element={<Home/>} />
                <Route path="namebar" element={<NameBar />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
                <Route path="topBar" element={<TopBar />} />
                <Route path="summarybox" element={<SummaryBox />} />
                <Route path="createstrategyarea" element={<CreateStrategyArea />} />
                <Route path="createbotarea" element={<CreateBotArea />} />
                <Route path="sidebar" element={<SideBar />} />
                <Route path="strategy" element={<Strategy />} />
              </Routes>
            </BrowserRouter>
          </BS.Row>
        </BS.Col>
      </BS.Row>
    </div>
  );
}

export default App;
