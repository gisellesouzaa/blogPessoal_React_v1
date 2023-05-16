import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
