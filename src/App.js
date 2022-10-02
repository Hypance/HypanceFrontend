
import "./App.css";

import {BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import NameBar from "./Pages/NameBar";
import NavBar from "./Pages/NavBar";
import SummaryBox from "./Pages/SummaryBox";
import CreateStrategyArea from "./Pages/CreateStrategyArea";
import CreateBotArea from "./Pages/CreateBotArea";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='namebar' element={<NameBar />} />
      <Route path='navbar' element={<NavBar />} />
      <Route path='summarybox' elemnet={<SummaryBox />} />
      <Route path='createstrategyarea' element={<CreateStrategyArea />} />
      <Route path='createbotarea' element={<CreateBotArea />} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
