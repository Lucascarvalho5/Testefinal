import { initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBv-v4aSCMY2O9sKAZtFJq2T-6MhHzOTE0",
    authDomain: "sistema-chamado-2f1d1.firebaseapp.com",
    projectId: "sistema-chamado-2f1d1",
    storageBucket: "sistema-chamado-2f1d1.appspot.com",
    messagingSenderId: "268056633203",
    appId: "1:268056633203:web:e321b75517226bab552f06",
    measurementId: "G-S10MPJRVG2"
  };

  
  const fireConnection = initializeApp.length && initializeApp(firebaseConfig) ;
  const db = getFirestore();
  const auth = getAuth();

  export {fireConnection, db, auth};