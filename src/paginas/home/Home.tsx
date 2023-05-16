import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center"  style={{ backgroundColor: "primary" }}>
                <Grid alignItems="center" item xs={12} style={{ marginTop: "8px"}}>
                    <Box>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>

                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" paddingBottom={"1rem"}>

                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "primary.main", color: "white"}}>Ver Postagens</Button>
                    </Box>
                </Grid>
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