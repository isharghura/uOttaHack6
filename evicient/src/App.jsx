import React from "react";
import "./styles.css";
import Navbar from "./Navbar"
import Landing from "./Landing"
import Login from "./Login"
import { getLocation } from './js/location.js';


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData} from 'react-firebase-hooks/firestore';

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBkNjwD0EgTWe9hbj7VcpkWwDHZiWf42Sw",
//   authDomain: "evicient-01.firebaseapp.com",
//   projectId: "evicient-01",
//   storageBucket: "evicient-01.appspot.com",
//   messagingSenderId: "853403886366",
//   appId: "1:853403886366:web:e9fc1417ccfdb58ba2df0f",
//   measurementId: "G-5ETTKZTTLH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = firebase.auth();
// const firestore = firebase.firestore();

// const [user] = useAuthState(auth);

function App() {
  const locationResult = getLocation();
  console.log("Result: " + locationResult);
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Landing />
      break
    case "/login":
      component = <Login />
      break
  }
  return (
    <>
      <Navbar />
      <div class = "container">
        {component}
      </div>
    </>
  );
}


export default App;
