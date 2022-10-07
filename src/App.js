
import "./App.css";

import {BrowserRouter, Routes, Route } from "react-router-dom";

//Components 
import Home from "./Components/Home/Home";
import NameBar from "./Components/NameBar/NameBar";
import NavBar from "./Components/NavBar/NavBar";
import SummaryBox from "./Components/SummaryBox/SummaryBox";
import CreateStrategyArea from "./Components/CreateStrategyArea/CreateStrategyArea";
import CreateBotArea from "./Components/CreateBotArea/CreateBotArea";
import SideBar from "./Components/SideBar/SideBar";
import SelectList from "./Components/SelectList/SelectList";



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
      <Route path='sidebar' element={<SideBar />} />
      <Route path='selectList' element={<SelectList />} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
