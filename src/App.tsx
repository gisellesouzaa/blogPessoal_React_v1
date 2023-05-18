import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre';
import Postagens from './paginas/postagens/Postagens';
import Temas from './paginas/temas/Temas';
import Usuarios from './paginas/usuarios/Usuarios';
import Galeria from './paginas/galeria/Galeria';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import './App.css'
import CadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/postagens" element={<Postagens />} />
            <Route path="/temas" element={<Temas />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
