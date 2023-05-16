import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/sobre';
import Videos from './paginas/videos/videos';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
