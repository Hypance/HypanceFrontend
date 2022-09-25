
import './App.css';


import Navbar from './components/navbar';
import Input from './components/input/Input';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
import Link from './components/Link/Link';
import { useState } from 'react';
import {users} from './usersarr'

function App() {
  
  const [form, setForm] = useState({email: "", password1: "", password2: ""});
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }
  
  var mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   \. ya gereksiz dedi?

  const checkNull = () => {
    if (form.email !== "" && form.password1 !== "" && form.password2 !== ""){
      
      checkEmail()
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
    <div className="App">
      <Navbar></Navbar>
      <h1 className='Sign-Up'>Sign Up</h1>
      <Form>
        <Input name="email" type={"text"} placeHolder = {"Enter email or username"} onChange={onChangeInput}  />
        <Input name="password1" type={"password"} placeHolder = {"Enter password"} onChange={onChangeInput}/>
        <Input name="password2" type={"password"} placeHolder = {"Re-Enter password"} onChange={onChangeInput}/>
        <Button onClick={() => checkNull()}></Button>
        <Link></Link>
      </Form>
    </div>
    
  );
}

export default App;


