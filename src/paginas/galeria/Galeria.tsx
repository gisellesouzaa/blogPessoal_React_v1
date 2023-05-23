import React from 'react';
// import { Grid } from '@material-ui/core';
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import './Galeria.css'

function Galeria() {
    return (
        <>
            <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={8} justifyContent="center" alignItems="center">

            {/* <Grid className='border' item xs={6} alignItems={'center'} justifyContent={'center'}>
                    <Card sx={{ maxWidth: 580 }} >
                        <CardActionArea className='cardVideo'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7geKgcC1Eg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> */}

                <Grid className='border' item xs={6} alignItems={'center'} justifyContent={'center'}>
                    <Card sx={{ maxWidth: 560 }} >
                        <CardActionArea className='cardVideo'>
                            <video  width="560" height="315" controls>
                                <source src="src\video\ocean-sea-wave-video.mp4" type="video/mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid className='border' item xs={6} alignItems={'center'} justifyContent={'center'}>
                    <Card sx={{ maxWidth: 560 }} >
                        <CardActionArea className='cardVideo'>
                            <video  width="560" height="315" controls>
                                <source src="src\video\retrospectiva capitolio.mp4" type="video/mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Retrospectiva Viagem Capitólio
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid className='border' item xs={6} alignItems={'center'} justifyContent={'center'}>
                    <Card sx={{ maxWidth: 560 }} >
                        <CardActionArea className='cardVideo'>
                            <video  width="560" height="315" controls>
                                <source src="src\video\Retrospectiva Busios.mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Retrospectiva Viagem Búzios
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid className='border' item xs={6} alignItems={'center'} justifyContent={'center'}>
                    <Card sx={{ maxWidth: 560 }} >
                        <CardActionArea className='cardVideo'>
                            <video  width="560" height="315" controls>
                                <source src="src\video\Retrospectiva arraial 1ª viagem.mp4" type="video/mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Retrospectiva Viagem Arraial 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid className='border' item xs={6} alignItems={'center'} justifyContent={'center'}>
                    <Card sx={{ maxWidth: 560 }} >
                        <CardActionArea className='cardVideo'>
                            <video  width="560" height="315" controls>
                                <source src="src\video\Confraternização 2019.mp4" type="video/mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
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