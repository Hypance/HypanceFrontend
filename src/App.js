import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Home from "./Components/Home/Home";
import NameBar from "./Components/NameBar/NameBar";
import TopBar from "./Components/TopBar/TopBar";
import CBASummaryBox from "./Components/SummaryBox/CreateBotAreaSummaryBox/CBASummaryBox";
import CSASummaryBox from "./Components/SummaryBox/CreateStrategyAreaSummaryBox/CSASummaryBox";

import CreateStrategyArea from "./Components/CreateStrategyArea/CreateStrategyArea";
import CreateBotArea from "./Components/CreateBotArea/CreateBotArea";
import SideBar from "./Components/SideBar/SideBar";
import Strategy from "./Components/Strategy/Strategy";
import * as BS from "react-bootstrap";
import ToggleVisibility from "./Components/SideBar/ToggleVisibility";

import SignIn from "./Components/LogIn/SignIn/SignIn";


function App() {
  return (
    <div className="container-fluid">
      <BS.Row>
        <BS.Col md="2">
          <ToggleVisibility>
            <SideBar></SideBar>
          </ToggleVisibility>
        </BS.Col>
        <BS.Col md="10">
          <BS.Row className="p-3">
            <TopBar></TopBar>
          </BS.Row>
          <BS.Row className="p-3">
            <BrowserRouter>
              <Routes>

                <Route index element={<SignIn />} />

      

                <Route path="namebar" element={<NameBar />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
                <Route path="topBar" element={<TopBar />} />
                <Route path="cbasummarybox" element={<CBASummaryBox />} />
                <Route path="csasummarybox" element={<CSASummaryBox />} />

                <Route
                  path="createstrategyarea"
                  element={<CreateStrategyArea />}
                />
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
