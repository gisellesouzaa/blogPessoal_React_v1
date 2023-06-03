import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";

function ListaPostagemPorTitulo() {

    const [posts, setPosts] = useState<Postagem[]>([])

    let navigate = useNavigate();

    const [titulo, setTitulo] = useState<string>("")

    const dispatch = useDispatch()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === "") {
            toast.error('Usuário não autenticado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    async function getPost() {
        try {
            await busca(`/postagens/titulo/${titulo}`, setPosts, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            console.error(error)
            if (error.response?.status === 403) {
                dispatch(addToken(''))
            }
        }
    }

    function updateTitulo(e: ChangeEvent<HTMLInputElement>) {

        setTitulo(
            e.target.value
        )

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        getPost();
    }

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={2} width="100%">
                    <TextField
                        label="Título"
                        name="titulo"
                        id="titulo"
                        value={titulo}
                        variant="outlined"
                        className="input"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateTitulo(e)}
                    />
                    <Box mx={1}>
                        <Button type="submit" variant="contained" className="marginLeft" size='medium' color="primary"
                            disabled={titulo.length === 0 ? true : false}>
                            Pesquisar
                        </Button>
                    </Box>
                </Box>
            </form>

            {
                posts.length === 0 ? 
                    (<Box m={2}>
                        <Typography color="textSecondary" gutterBottom>Nenhuma postagem encontrada</Typography>
                    </Box>) : (
                posts.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.tema?.descricao}
                                </Typography>
                                {/* <Typography variant="body2" component="p">
                                    Postado por: {post.usuario?.nome}
                                </Typography> */}
                                <Typography variant="body1" component="p">
                                    Data: {Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'medium' }).format(new Date(post.data))}
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
                    )
            }
        </>
    );
}

export default ListaPostagemPorTitulo