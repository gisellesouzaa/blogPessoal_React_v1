import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Carrossel from '../../components/carrossel/Carrossel';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css'

function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Carrossel />
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12} style={{ marginTop: "8px" }}>
                    <Box display="flex" justifyContent="center" paddingBottom={"1rem"}>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>



        </>
    )
}

export default Home;