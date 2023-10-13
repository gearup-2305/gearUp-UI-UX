import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;

// componenets
  // Homepage
    // Login component
  // Nav
  // Community Board - acts as container
    // Filter Donation Requests
    // Donation Request Cards
  // Donation Request Form
    // Login component - conditionally render depending on if user is logged in
  // Profile



  // backend questions:
  // donation active: true / false --> backend switches to false when donation request fulfilled or amount met
  // edge case: if donation has 20 dollars needed, what if someone donates 30? do we control the form? do we allow them 
  // to donate more? 