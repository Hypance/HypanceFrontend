import React, { useState } from 'react'
import * as BS from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import avatar from "../../TopBar/avatar.jpg";
import "./SignIn.css"
function SignIn() {
    const userList =  [
        {
            email: 'berkan1458@gmail.com',password: '123456'
        },
        {
            email: 'banana@gmail.com',password: 'secretbanana'
        },
        {
            email: 'orange@email.com',password: 'secretorange'
        },
        {
            email: 'melon@email.com',password: 'secretmelon'
        },
        {
            email: 'strawberry@email.com',password: 'secretstrawberry'
        }
    ]
    const navig = useNavigate();

    const [user, setUser] = useState({ email: '', password: '', rememberMe: false });
    let d = 0;
    const check = (i) => {
        if(userList[i].email.includes(user.email) && userList[i].password.includes(user.password) ){
          alert("Welcome");
          d=1;
          navig("/strategy");
        }
          else{
            if(i===userList.length-1){
              if(d===0){
                alert("Email or password is incorrect");  
            
        }
      }}}
    
      const LogIn = () => {  
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        
        if (user.email === '') {
        alert('Email is required');
      }
        else if (user.password === '') {
        alert('Password is required')
      }
        else if (!regEx.test(user.email)) {
        alert("Invalid email");
      }
        else{
          for(let i=0;i<userList.length;i++){
            check(i);
          }
        }
        
      }
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
                    <h4>Login into your account</h4>
                    <BS.Form.Control
                        className="inputs"
                        type="email"
                        value={user.email}
                        placeholder="Email"
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                            console.log(user);
                        }}
                    />
                    <BS.Form.Control
                        className="inputs"
                        type="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                            console.log(user);
                        }}
                    />
                </div>
                <div className='check'>
                    <BS.Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Remember Me"
                        onChange={(e) => {
                            if (user.rememberMe === false) {
                                user.rememberMe = true;
                            }
                            else if (user.rememberMe === true) {
                                user.rememberMe = false;
                            }
                            console.log(user);
                        }}
                    />
                    <a href='../ForgotPassword'>Recover password</a>
                </div>
                <div className='center'>
                    <BS.Button className="SignIn-button" onClick={LogIn}>
                        Sign In
                    </BS.Button></div>
            </BS.Col>
            <BS.Col md="6">
                <img src={avatar} alt="hypance-sign-in">
                </img>
            </BS.Col>
        </BS.Row></>


    )
}

export default SignIn