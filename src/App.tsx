import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre';
import Usuarios from './paginas/usuarios/Usuarios';
import Galeria from './paginas/galeria/Galeria';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastrarTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css'

function App() {
  const THEME = createTheme({
    palette: {
      primary: {
        light: '#33c9dc',
        main: '#00bcd4',
        dark: '#008394',
        contrastText: '#fff',
      },
      secondary: {
        light: '#637bfe',
        main: '#6625ff',
        dark: '#2a3eb1',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>
      <MuiThemeProvider theme={THEME}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  )
}

export default App
