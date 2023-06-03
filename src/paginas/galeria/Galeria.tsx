import React from 'react';
// import { Grid } from '@material-ui/core';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import './Galeria.css'

function Galeria() {
    return (
        <>

            <h2 className='tituloGaleria'>Apresentação Fotos</h2>


            <Grid item xs={12} alignItems={'center'} justifyContent={'center'} className="slidesGoogle">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4yWgTTMjggQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Grid>

            <h2 className='tituloGaleria'>Videos:</h2>

            <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={8} justifyContent="center" alignItems="center">

                <Grid className='border' item xs={12} md={6} xl={6} sm={6} lg={6} alignItems={'center'} justifyContent={'center'}>

                    <Card sx={{ maxWidth: 580 }} >
                        <CardActionArea className='cardVideo'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/victLiCqDlI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Búzios - Dança Aninha e Rafael
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>



                <Grid className='border' item xs={12} md={6} xl={6} sm={6} lg={6} alignItems={'center'} justifyContent={'center'}>

                    <Card sx={{ maxWidth: 580 }} >
                        <CardActionArea className='cardVideo'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4pA7ZdsIbLs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Croa do Gore - Dança
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid className='border' item xs={12} md={6} xl={6} sm={6} lg={6} alignItems={'center'} justifyContent={'center'}>

                    <Card sx={{ maxWidth: 580 }} >
                        <CardActionArea className='cardVideo'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/R5PB243ipeI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Parque das Sementeiras - Dança
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid className='border' item xs={12} md={6} xl={6} sm={6} lg={6} alignItems={'center'} justifyContent={'center'}>

                    <Card sx={{ maxWidth: 580 }} >
                        <CardActionArea className='cardVideo'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/R5PB243ipeI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Parque das Sementeiras - Dança
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>



            </Grid>
        </>
    )
}

export default Galeria;