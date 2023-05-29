import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    const navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
            // console.log(userResult)
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                // alert('Usuário cadastrado com sucesso!')
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                // alert('Dados inválidos. Erro ao cadastrar!')
                toast.error('Dados inválidos. Erro ao cadastrar!', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        } else {
            // alert('As senhas digitadas não correspondem!')
            toast.error('As senhas digitadas não correspondem!', {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validarEmail = emailRegex.test(user.usuario);

    const nomeError = user.nome.length > 0 && user.nome.length < 3
    const usuarioError = !validarEmail && user.usuario.length > 0
    const senhaError = user.senha.length > 0 && user.senha.length < 8
    const confirmarSenhaError = confirmarSenha !== user.senha
    const vazio = user.nome.length === 0 || user.usuario.length === 0 || user.senha.length === 0 || confirmarSenha.length === 0

    // useEffect(() => {
    //     console.log("nomeOK: " + nomeOk)
    //     console.log("usuarioError: " + usuarioError)
    //     console.log("senhaError: " + senhaError)
    //     console.log("confirmarSenhaError: " + confirmarSenhaError)
    //     console.log("vazio: " + vazio)
    // })

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>

                        <TextField
                            error={nomeError}
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome'
                            label='Nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                            helperText={nomeError ? 'Digite um nome válido!' : ''}
                        />

                        <TextField
                            error={usuarioError}
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario'
                            label='E-mail'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            helperText={usuarioError ? 'Digite um e-mail válido!' : ''}
                        />

                        <TextField
                            error={senhaError}
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha'
                            label='Senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                            helperText={senhaError ? "A senha precisa ter no mínimo 8 caracteres" : ""}
                        />

                        <TextField
                            error={confirmarSenhaError}
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='Confirmar Senha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                            helperText={confirmarSenhaError ? 'As senhas não conferem!' : ''}
                        />

                        <TextField
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto'
                            label='URL da foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'
                                disabled={nomeError || usuarioError || senhaError || confirmarSenhaError || vazio ? true : false}>                                                            
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;