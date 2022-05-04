import './App.css';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route }
from "react-router-dom";
import { auth } from "./firebase";
import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else { 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/login" element={<><Login/></>}/>

          <Route path="/" element={<><Home/></>}/>

          <Route path="/cart" element={<><Cart/></>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
