import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import ModalPostagem from '../modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    async function getPostagem() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPostagem()
    }, [posts.length])



    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12}>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {
                posts.map(post => (
                    <Box m={2} >
                        <Card variant="outlined" className='cardPostagem'>
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    <img src={`${post.foto}`} alt="" className='imagempost' />
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p" color="textSecondary">
                                    <b>Tema:</b> {post.tema?.descricao}
                                </Typography>
                                <Typography variant="body2" component="p" color="textSecondary">
                                    <b>Data da postagem:</b> {post.data}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>)
}

export default ListaPostagem;