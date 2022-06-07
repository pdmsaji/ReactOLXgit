import React , {useState, useContext} from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../Store/FirebaseContext';
import db from '../../Firebase/config';
import {auth} from '../../Firebase/config';
import {useNavigate} from 'react-router-dom';



function Login() {

   const [email, setEmail] =  useState( '');
   const [password, setPassword] =  useState( '');
   const {db} = useContext(FirebaseContext);
   const navigate = useNavigate();


   const handleLogin = (e)=> {

    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(

      ()=> {
        navigate('/home');
        //alert('login successful');
      }
    ).catch(

      (err)=>{
        alert("login Error", err.message);
      }
    )


   };



  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>


        <form onSubmit={handleLogin} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'> Login </button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
