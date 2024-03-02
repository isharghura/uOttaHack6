import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Login from "./components/login";
import Home from "./components/home";
import "./styles.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData} from 'react-firebase-hooks/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkNjwD0EgTWe9hbj7VcpkWwDHZiWf42Sw",
  authDomain: "evicient-01.firebaseapp.com",
  projectId: "evicient-01",
  storageBucket: "evicient-01.appspot.com",
  messagingSenderId: "853403886366",
  appId: "1:853403886366:web:e9fc1417ccfdb58ba2df0f",
  measurementId: "G-5ETTKZTTLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(auth)

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
