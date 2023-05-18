import React from 'react';
import './Navbar.css'
import { Box, Typography } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <Box display="flex" justifyContent="center" className='boxNav'>
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

                <Link to="/postagens">
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

                <Link to="/login">
                <Box className="itemMenu" mx={1} >
                    <LogoutIcon/>
                </Box>
                </Link>
            </Box >
        </>
    )
}

export default Navbar;