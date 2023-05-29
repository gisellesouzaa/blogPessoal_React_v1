import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2" className="sobre">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
                        Sobre-nós
                        </Typography>

                    <Typography variant="body1" gutterBottom color="textPrimary" align="center">
                        Bem-vindo ao nosso blog de viagens! Aqui, você encontrará uma coleção de memórias e histórias incríveis compartilhadas por entusiastas de viagens que fizeram parte da antiga agência de viagens Real Love Tour. Nossa agência tinha como principal foco unir a paixão pelas viagens e pela dança, criando experiências únicas e inesquecíveis.
                    </Typography>

                    <Typography variant="body1" gutterBottom color="textPrimary" align="center">
                        Eu, como um ex-membro da equipe da Real Love Tour, me dediquei a aprender sobre programação após o fechamento da agência. Com esse conhecimento adquirido, construí este site para colocar em prática minhas habilidades e criar um espaço onde pudéssemos reviver as memórias da agência e compartilhar nossas histórias de viagem.

                    </Typography>

                    <Typography variant="body1" gutterBottom color="textPrimary" align="center">
                        Durante minha jornada de aprendizado, percebi que a programação poderia ser uma ferramenta poderosa para criar uma plataforma interativa e envolvente, onde os amantes de viagens e dança pudessem se conectar e compartilhar suas experiências. Assim, este site nasceu, como uma forma de unir minha paixão por viagens, dança e programação em um único lugar.

                    </Typography>

                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                    Este blog é uma prova do poder da aprendizagem contínua e do desejo de criar algo significativo a partir das experiências vividas. Estou animada para compartilhar minhas habilidades de programação com você e criar uma comunidade vibrante de amantes de viagens, dança e/ou programação.
                    </Typography>

                    <Typography variant="body1" gutterBottom color="textPrimary" align="center">
                    Então, embarque nessa jornada conosco. Reviva as memórias da Real Love Tour, explore novos ritmos e compartilhe suas próprias histórias de viagem e dança pelo mundo. Bem-vindo ao nosso blog de viagens desenvolvido com paixão pela programação! 
                    </Typography>

                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;