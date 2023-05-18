import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Carrossel from '../../components/carrossel/Carrossel';
import './Home.css'

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center"  className='caixa'>
                <Grid alignItems="center" item xs={12} style={{ marginTop: "8px"}}>
                    <Box>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>

                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" paddingBottom={"1rem"}>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} className='postagens'></Grid>
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