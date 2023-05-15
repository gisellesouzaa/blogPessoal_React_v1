import React from 'react';
import GithubIcon from '@material-ui/icons/Github';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/giselle-de-souza-gabriel/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://github.com/gisellesouzaa" target="_blank">
                                <GithubIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://gisellesouzaa.github.io/portfolio/" target="_blank">
                                <FolderSpecialIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5511999059579&text=Ol%C3%A1!%20Tudo%20bem%3F%20Vi%20seu%20portf%C3%B3lio" target="_blank">
                                <WhatsAppIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Desenvolvedora: Giselle Souza</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;