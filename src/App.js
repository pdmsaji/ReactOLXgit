import React, {useContext, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Create from './Pages/Create';
import Login from './Pages/Login';
import {AuthContext, FirebaseContext } from './Store/FirebaseContext';
import db, {auth} from '../src/Firebase/config';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
//import { auth } from './Firebase/config';

function App() {

const {setUser} = useContext(AuthContext);
const {db}= useContext(FirebaseContext);

useEffect(() => {
// console.log(user);

auth.onAuthStateChanged(
  (user)=> {
     setUser(user);
  }

)
  
})


  return (
    <div>
      <Router>

        <Routes>

          <Route path='/' element={<Home />} /> 

          <Route path='/signup' element={<Signup />} />

          <Route path='/login' element={<Login />} />

          <Route path='/sell' element={<Create />} />          

        </Routes>
      </Router>


    </div>
  );
}




export default App;
