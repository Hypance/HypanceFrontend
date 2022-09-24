import './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Form from './components/form/Form';
import { useState } from 'react';
function App() {
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
  const [user, setUser] = useState({ email:'', password: '', RememberMe:'' });
  const handleChange = (e) => {
    setUser({ ...user, email: e.target.value });
    console.log(user);
  }
  const handleChange1 = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(user);
  }
  const handleChange2 = (e) => {
    setUser({ ...user, RememberMe: e.target.value });
    console.log(user);
  }
  

  const LogIn = () => {
    let d=1;  
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
    else {
      for(let i=0;i<5;i++){
        if (user.email!==users[i].email || user.password !== users[i].password) {
          console.log("Email or password is incorrect")
          }
        else if(user.email===users[i].email && user.password === users[i].password) {
          alert("Welcome")
          i=4;
          }
  
      }
  }
    
    
      // while (i < users.length ){
      //   if (users[i].email === user.email){ 
      //     alert("Bu E posta Kullanılıyor")
      //     d = 0;
      //   }
      //   i++
      // }
      // if (flag === 1)  {
        
      // }
    // }
}




return (
  <div className="App">
    <div className="hyp">
      <h3> Hypance </h3>
    </div>
    <Form >
      <h1> Log In </h1>
      <Input type={'email'} id='email' required={Input.required} value={user.name} placeHolder={'Enter email or username'} onChange={handleChange} />
      <Input type={'password'} id='password' required={Input.required} value={user.password} placeHolder={'Enter password'} onChange={handleChange1} />
      <div className="cb">
        <Input type={'checkbox'} value={false} id="rememberme" onChange={handleChange2} />  Remember me
      </div>
      <Button onClick={LogIn} />
      <div className='links'>
        <a href="/componentAdi"> Forgot password ? </a>
        <a href="/componentAdi"> Create a new account </a>
      </div>
    </Form>
  </div>
);
}
export default App
