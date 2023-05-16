import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={12} style={{ marginTop: "8px"}}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" paddingBottom={"1rem"}>
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white"}}>Ver Postagens</Button>
                    </Box>
                </Grid>
                {/* <Grid item xs={6} >
                    <img src="src\images\fivicon\REAL LOVE VETOR final editavel corel.png" alt="logo" height="250px" />
                </Grid> */}
                
                {/* <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <h1>reste</h1>
                </Grid> */}
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <Carrossel />
                </Grid>
            </Grid>

        </>
    )
}

export default Home;