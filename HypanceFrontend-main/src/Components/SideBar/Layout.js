import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import "./SideBar.css"
import brokenicon from "./img/Vector.png"


function Layout() {
    const [isActive, setIsActive] = useState(false)
    const handleClick = event => {
        setIsActive(!isActive);
    };
    return (

        <div >
            <div>
                <h2 className="hypance">Hypance</h2>
                <img className="brokenicon" src={brokenicon} alt="brokenicon" />
                <p className="overview">OVERVIEW</p>
                <p className="other">OTHER</p>
            </div>
            <nav>
                <ul className='fa-ul layout'>
                    <li>
                        <NavLink className={isActive ? 'dashboard' : 'dashboard'} onClick={handleClick} to="dashboard" >
                            <span className="icon">&#8962;</span>Dashboard
                        </NavLink >
                    </li> <br />


                    <li>
                        <NavLink className="dashboard" to="market">
                            <span className="icon">&#2814;</span> Market
                        </NavLink >
                    </li> <br />


                    <li>
                        <NavLink className="dashboard" to="strategy">
                            <span className="icon">&#x21AF;</span>Strategy
                        </NavLink >
                    </li> <br />


                    <li>
                        <NavLink className="dashboard" to="bot">
                            <span className="icon">&#128435;</span>Bot
                        </NavLink >
                    </li> <br />


                    <li>
                        <NavLink className="dashboard" to="backtest">
                            <span className="icon">&#9883;</span>Backtest
                        </NavLink >
                    </li> <br />


                    <li>
                        <NavLink className="dashboard" to="alerts">
                            <span className="icon">&#9888;</span>Alerts
                        </NavLink >
                    </li> <br />


                    <li>
                        <NavLink className="dashboard" to="trades">
                            <span className="icon">&#9878;</span> Trades
                        </NavLink >
                    </li> <br />


                    <li>
                        <NavLink className="dashboard" to="portfolios">
                            <span className="icon">&#10064;</span>Portfolios
                        </NavLink >
                    </li> <br />

                    <div className='others'>

                        <li>
                            <NavLink className="dashboard" to="settings">
                                <span className="icon">&#9881;</span> Settings
                            </NavLink >
                        </li> <br />


                        <li>
                            <NavLink className="dashboard" to="logout">
                                <span className="icon">&#10162;</span>  Logout
                            </NavLink >
                        </li> <br />

                    </div>
                </ul>

            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout