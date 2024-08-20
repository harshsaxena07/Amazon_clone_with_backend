import React, { useEffect } from 'react';
import './App.css';
import Header from './jsxfile/Header';
import Home from './jsxfile/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './jsxfile/Checkout';
import Login from './jsxfile/Login';
import Payment from './jsxfile/Payment';
import Orders from './jsxfile/Orders';
import { auth } from './jsxfile/firebase';
import { useStateValue } from './jsxfile/StateProvider';
import {loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51PhpQTAFD8IBeyVhc9mJmBrIel47iKgQIqzcXD9T3ni3Mra7z0QmXNDBAJ6h5TpGMqen9YnuAaFbdytnnLP0wQuQ00ePwUklk3"
)


function App() {
  const [{}, dispatch] = useStateValue(); // Call useStateValue as a function

  useEffect(() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // The user just logged in..
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [dispatch]); // Add dispatch to the dependency array

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/orders" 
            element={<Orders />} 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/checkout" 
            element={
              <>
                <Header />
                <Checkout />
              </>
            } 
          />
          <Route 
            path="/payment" 
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            } 
          />
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Home />
              </>
            } 
          />
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
