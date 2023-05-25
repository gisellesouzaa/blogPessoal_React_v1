import React from 'react';
import './Navbar.css'
import { Box, Typography } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();


    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <Box display="flex" justifyContent="center" className='boxNav'>
            <Link to="/home">
                <Box className="itemMenu" mx={1} >
                    <p>home</p>
                </Box>
            </Link>

            <Link to="/sobre">
                <Box className="itemMenu" mx={1} >
                    <p>sobre</p>
                </Box>
            </Link>

            <Link to="/galeria">
                <Box className="itemMenu" mx={1} >
                    <p>galeria</p>
                </Box>
            </Link>

            <Box mx={1} >
                <img className="logo_principal" src="src\images\logo_vetor.png" alt="" />
            </Box>

            <Link to="/posts">
                <Box className="itemMenu" mx={1} >
                    <p>postagens</p>
                </Box>
            </Link>

            <Link to="/temas">
                <Box className="itemMenu" mx={1} >
                    <p>temas</p>
                </Box>
            </Link>

            <Link to="/usuarios">
                <Box className="itemMenu" mx={1} >
                    <p>usuarios</p>
                </Box>
            </Link>

            <Box className="itemMenu" mx={1} onClick={goLogout}>
                <LogoutIcon />
            </Box>
        </Box >
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;