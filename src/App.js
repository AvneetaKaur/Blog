import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bollywood from './Bollywood';
import Fitness from './Fitness';
import Food from './Food';
import Hollywood from './Hollywood';
import Home from './Home';
import logo from './logo.png';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Technology from './Technology';
import TheLatest from './TheLatest';
function App() {
  return (
    <>
    {/* LOGO */}
    <img src={logo} alt="logo" className="logo" />

    {/* NAVBAR */}
    <center>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Mainpage" element={<MainPage/>}/>
        <Route path="/Bollywood" element={<Bollywood/>}/>
        <Route path="/Technology" element={<Technology/>}/>
        <Route path="/Hollywood" element={<Hollywood/>}/>
        <Route path="/Fitness" element={<Fitness/>}/>
        <Route path="/Food" element={<Food/>}/>
      </Routes>
      </BrowserRouter>
      </center>
    </>
  );
}
export default App;