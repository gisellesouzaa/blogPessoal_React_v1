import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
// import { Box } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        <img src="src\images\fivicon\REAL LOVE VETOR final editavel corel.png" alt="logo"  height="90rem"/>
                    </Typography>

                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar> */}
        </>
    )
}

export default Navbar;