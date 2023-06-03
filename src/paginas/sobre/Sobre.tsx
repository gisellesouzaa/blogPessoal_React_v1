import { Box } from '@material-ui/core';
import React from 'react';
import './Sobre.css'

function Sobre(){
    return(
        <>
        <Box alignContent={'center'} textAlign={'center'} alignItems={'center'} justifyContent={'center'}>
            <img 
            src="https://i.imgur.com/iaw1SqI.png" 
            alt="imagem sobre" 
            referrerPolicy="no-referrer" 
            className='imgSobre'/>
        </Box>
        </>
    )
}

export default Sobre;