import React from 'react';
import BotaoMenu from '../../botaoMenu/BotaoMenu';
import { IconButton, Toolbar, makeStyles, AppBar, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar >
                    <Typography variant="h6" className={classes.title}>
                        <img src="src\images\fivicon\REAL LOVE VETOR final editavel corel.png" alt="logo" height="90rem"/>
                    </Typography>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <BotaoMenu />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}