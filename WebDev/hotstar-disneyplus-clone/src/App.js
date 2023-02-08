import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'


import { Routes, Route } from 'react-router-dom';
import Details from './components/Details/details';
import Membership from './components/Membership/membership';



function App() {
  return (
    <div className="App">

      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/details' element={<Details />} />
        </Routes>

      
      

    </div>
  );
}

export default App;
