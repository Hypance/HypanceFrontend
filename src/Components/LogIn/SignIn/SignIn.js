import React from 'react'
import * as BS from "react-bootstrap";
import avatar from "../../TopBar/avatar.jpg";
import "./SignIn.css"
function SignIn() {
    return (<>
        <BS.Row>
            <BS.Col>
                <div className='SignInNav'>
                    <p className='dnm'>Hypance</p>
                    <p> Don't have an account?
                        <a href='../SignUp'>Sign up!</a></p>
                </div>
                <div className='form'>
                    <h1>Welcome Back</h1>
                    <h2>Login into your account</h2>
                    <BS.Form.Control
                        className="input"
                        type="email"
                        //   value={bot.description}
                        placeholder="Email"
                        onChange={(e) => {
                            // bot.description = e.target.value;
                        }}
                    />
                    <BS.Form.Control
                        className="input"
                        type="password"
                        //   value={bot.description}
                        placeholder="Password"
                        onChange={(e) => {
                            // bot.description = e.target.value;
                        }}
                    />
                </div>
                <div className='check'>
                    <BS.Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Remember Me"
                    />
                    <a href='../ForgotPassword'>Recover password</a>
                </div>
                <div className='center'>
                <BS.Button className="SignIn-button">
                    Sign In
                </BS.Button></div>
            </BS.Col>
            <BS.Col md="6">
                <img src={avatar} >
                </img>
            </BS.Col>
        </BS.Row></>


    )
}

export default SignIn