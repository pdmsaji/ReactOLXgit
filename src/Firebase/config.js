import firebase from 'firebase/app';
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import "firebase/auth";

import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyClKF2ZhrQxpAgEx1d7WLYVCc3McNjpCEo",
    authDomain: "r-apps-b5bce.firebaseapp.com",
    projectId: "r-apps-b5bce",
    storageBucket: "r-apps-b5bce.appspot.com",
    messagingSenderId: "425105569075",
    appId: "1:425105569075:web:1cd34b160c994aacdd3a46",
    measurementId: "G-BLY5TCXSPG"
  };


  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
//const db = getFirestore(fb);

const db = firebase.firestore();

export default db;


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

export {auth};
