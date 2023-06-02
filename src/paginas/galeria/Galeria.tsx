import React from 'react';
// import { Grid } from '@material-ui/core';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import './Galeria.css'

function Galeria() {
    return (
        <>
            <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={8} justifyContent="center" alignItems="center">

                <Grid className='border' item xs={6} alignItems={'center'} justifyContent={'center'}>
                    <Card sx={{ maxWidth: 560 }} >
                        <CardActionArea className='cardVideo'>
                            <video width="560" height="315" controls>
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
                            <video width="560" height="315" controls>
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
                            <video width="560" height="315" controls>
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
                            <video width="560" height="315" controls>
                                <source src="src\video\Confraternização 2019.mp4" type="video/mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Confraternização
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
                            <video width="560" height="315" controls>
                                <source src="src\video\apresentação kelly buzios.mp4" type="video/mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Buzios - Coreografia
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
                            <video width="560" height="315" controls>
                                <source src="src\video\buzios dança.mp4" type="video/mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Buzios - Passeio de Barco
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
                            <video width="560" height="315" controls>
                                <source src="src\video\capitolio trecho.mp4" type="video/mp4"></source>
                            </video>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Capitolio - Passeio de Lancha
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

                {/* <Grid item xs={12} alignItems={'center'} justifyContent={'center'}>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTb3DDsKJZwORjGP0848OUbPDGdSHlKRoiTbVDUkufEss_wNXHtvEVpZgnBgIO2HeAXBhv-hFboj2ZX/embed?start=false&loop=false&delayms=5000" frameBorder="0" width="960" height="569" allowFullScreen="true" mozallowFullScreen="true" webkitallowFullScreen="true"></iframe>
                </Grid> */}

            </Grid>
        </>
    )
}

export default Galeria;