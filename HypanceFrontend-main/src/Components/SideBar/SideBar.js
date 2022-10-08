import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./Layout";
import "./SideBar.css"
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import Strategy from "./pages/Strategy";
import Bot from "./pages/Bot";
import Backtest from "./pages/Backtest";
import Alerts from "./pages/Alerts";
import Trades from "./pages/Trades";
import Portfolios from "./pages/Portfolios";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout"


function SideBar() {
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 bar">
                    
                    
                    <BrowserRouter>
                        <Routes>
                            <Route path="/*" element={<Layout></Layout>} >
                                
                                
                                <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
                                <Route path="market" element={<Market></Market>}></Route>
                                <Route path="strategy" element={<Strategy></Strategy>}></Route>
                                <Route path="bot" element={<Bot></Bot>}></Route>
                                <Route path="backtest" element={<Backtest></Backtest>}></Route>
                                <Route path="alerts" element={<Alerts></Alerts>}></Route>
                                <Route path="trades" element={<Trades></Trades>}></Route>
                                <Route path="portfolios" element={<Portfolios></Portfolios>}></Route>
                                <Route path="settings" element={<Settings></Settings>}></Route>
                                <Route path="logout" element={<Logout></Logout>}></Route>
                                
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>

        </div>
    )
}


export default SideBar