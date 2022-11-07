import React, { useState } from 'react'
import * as BS from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import avatar from "../../TopBar/avatar.jpg";
import "./SignUp.css"



function SignUp() {



    const [form, setForm] = useState ({fullname:'',email:'',password1:'',password2:''})

    const users =  [
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

    var mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

    const checkNull = () => {

        console.log(form)
        if (form.fullname !=="" && form.email !== "" && form.password1 !== "" && form.password2 !== ""){
          
          checkEmail()
        }
        else {
          alert("Boş kalan yerleri doldurunuz.")
        }
      }

      const checkEmail = () => {
        let i = 0;
        let flag = 1;
       
        while (i < users.length ){
          if (users[i].email === form.email){ 
            alert("Bu E posta Kullanılıyor")
            flag = 0;
          }
          i++
        }
        if (flag === 1)  {
          SignUp()
        }  
      }

      const SignUp = () => {

        if (mailformat.test(form.email) && (form.password1 === form.password2)){
          alert("Başarılı bir şekilde kaydedildi.Lütfen e-posta adresinizi kontrol edin.")
          console.log(form)
          console.log(mailformat.test(form.email))
        }
        else{
          if (mailformat.test(form.email)=== false){
            alert("Lütfen Geçerli bir mail adresi giriniz.")
          }
          else{
            alert("Şifreler birbiriyle uyuşmuyor.")
          }
        }
    
      }
  return (
    <div className='Sign-Up'>
    <BS.Row>
        <BS.Col md='5'>
            <img src={avatar} alt="rastgele" height={600} width={600} />

        </BS.Col>
        <BS.Col>
            <p className='float-end'><b>Have an account? <a className='link' href="">Sign In!</a></b> </p>

            <br /><br /><br /><br /><br /><br />

            
            <div className='form'>
                <h1>Get Started with Hypance</h1>
                <p className='subtitle'>The Fastest Way to Make Analysis</p>
                <BS.Form.Control
                        className="inputs"
                        type="text"
                        // value={user.email}
                        placeholder="Full Name"
                        onChange={(e) => {
                            setForm({ ...form, fullname: e.target.value });
                            
                        }}
                    />
                    <BS.Form.Control
                        className="inputs"
                        type="email"
                        // value={user.email}
                        placeholder="Enter Email"
                        onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                        }}
                    />
                    <BS.Form.Control
                        className="inputs"
                        type="password"
                        // value={user.email}
                        placeholder="Password"
                        onChange={(e) => {
                            setForm({ ...form, password1: e.target.value });
                        }}
                    />
                    <BS.Form.Control
                        className="inputs"
                        type="password"
                        // value={user.email}
                        placeholder="Confirm Password"
                        onChange={(e) => {
                            setForm({ ...form, password2: e.target.value });
                            
                        }}
                    />
                    <BS.Button className='SignUp-button' onClick={checkNull}>Create Account</BS.Button>

                    <p className='text'><b>If you already a member, you can sign-in <a className='link' href=''>here</a></b></p>
                    <br />
                    <p className='subtitle'>By continuing you indicate that you read and agreed to the Terms of use</p>
            </div>
        </BS.Col>
    </BS.Row>
     
    </div>
  )
}

export default SignUp