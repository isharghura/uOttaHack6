import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./Navbar"
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
  return (
    <div>
      <Navbar />
      <div style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%',
        background: 'linear-gradient(#2C3968, #5771CE)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'grid',
        gridTemplateAreas: `
          "title"
          "battery"
          "info"`,
        gridGap: '20px',
        justifyItems: 'center',
        maxWidth: '600px',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          gridArea: 'title',
          fontSize: '2em',
          alignSelf: 'center'
        }}>Title</div>
        <div style={{
          gridArea: 'battery',
          width: '100%',
          height: '30px',
          border: '2px solid white',
          borderRadius: '15px',
          position: 'relative',
          overflow: 'hidden',
          alignSelf: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '77%', /* Adjust this to change the battery level */
            backgroundColor: 'limegreen',
            alignSelf: 'center'
          }} />
        </div>
        <div style={{
          gridArea: 'info',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          width: '100%',
          alignSelf: 'center'
        }}>
          <input type="text" style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            textAlign: 'center',
            alignSelf: 'center'
          }} />
          <input type="text" style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            textAlign: 'center',
            alignSelf: 'center'
          }} />
        </div>
      </div>
    </div>
  );
}


export default App;
