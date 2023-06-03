import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography, Grid, Link, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <><Grid container xs={12} className="gridFooter">
            <Grid item xs={2}>
                <Box display="flex" flexDirection="column">
                    <Typography variant="h6" align="center">Redes Sociais</Typography>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 35, color: "black" }} />
                        </a>
                        <a href="/" target="_blank">
                            <GitHubIcon style={{ fontSize: 35, color: "black" }} />
                        </a>
                        <a href="/" target="_blank">
                            <WhatsAppIcon style={{ fontSize: 35, color: "black" }} />
                        </a>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box display="flex" flexDirection="column">
                    <Typography variant="h6" align="center">Saiba mais</Typography>
                    <Box display="flex" alignItems="center" justifyContent="center">


                        <a href="https://gisellesouzaa.github.io/portfolio/" target="_blank" >
                            <Button type="submit" variant="contained" color="secondary">
                                PORTFOLIO
                            </Button>
                        </a>

                    </Box>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Typography variant="h6" align="center">Objetivo do projeto</Typography>
                    <Typography align="center" gutterBottom className="textFooter">
Projeto desenvolvido durante o Bootcamp Desenvolvedor Fullstack da Generation Brasil para como parte da avaliação do conteúdo aprendido.</Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box display="flex" justifyContent="space-around">


                    <Box justifyContent="center">
                        <Typography variant="h6" align="center">Patrocinador</Typography>
                        <img src='https://imgur.com/Z6oteMk.png' alt="logo" referrerPolicy="no-referrer"/>
                    </Box>

                    <Box justifyContent="center">
                        <Typography variant="h6" align="center">Apoio</Typography>
                        <img src='https://imgur.com/MG0lNNy.png' alt="logo" referrerPolicy="no-referrer"/>
                    </Box>
                </Box>
            </Grid>
        </Grid><Grid item xs={12}>
                <Box className='footer' style={{ height: "45px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="left" gutterBottom style={{ color: "white" }}>© 2023 | Todos os direitos reservados</Typography>
                    </Box>
                </Box>
            </Grid></>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;
