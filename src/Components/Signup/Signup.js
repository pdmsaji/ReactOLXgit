import React, {useState, useContext} from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/FirebaseContext';
import './Signup.css';
import { auth } from '../../Firebase/config';
import db from '../../Firebase/config';
//import {useNavigate} from 'react-router-dom';


export default function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');



  const dbd = useContext(FirebaseContext);

  //const navigate= useNavigate();
  //var User={};



 const handleSubmit = (e)=>{
   e.preventDefault(); // to prevent refresh of page
   console.log("onSubmit",username);
   //console.log("connection to ",db);
   auth.createUserWithEmailAndPassword(email, password).then(
     (res)=>{
            let User = res.user;   
            //User.updateProfile({displayName:username})
            console.log('new user is',User);
           }
   )}
  //  ).then(

  //  (User)=>{
  //         db.collection('users').add(
  //           {
  //             id:User.uid,
  //             username:username,
  //             phone:phone
  //           }

  //         )

  //  }


  //  ).then(
  //   ()=>{

  //      navigate('/login');
  //   }

  //  );


// }
 



  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>

        <form onSubmit={handleSubmit} >

          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={ (e)=>{setUsername(e.target.value)}}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={ (e)=>{setEmail(e.target.value)}}

            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={ (e)=>{setPhone(e.target.value)}}

            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"

            value={password}
            onChange={ (e)=>{setPassword(e.target.value)}}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />

          <button type='submit'>Signup</button>
        </form>


        <a>Login</a>
      </div>
    </div>
  );
}
