import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./BotaoMenu.css"
import { Link } from 'react-router-dom';

export default function BotaoMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" className="btnMenu">
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to="/home" >
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>

                <Link to="/sobre" >
                    <MenuItem onClick={handleClose}>Sobre</MenuItem>
                </Link>

                <Link to="/postagens" >
                    <MenuItem onClick={handleClose}>Postagens</MenuItem>
                </Link>

                <Link to="/temas" >
                    <MenuItem onClick={handleClose}>Temas</MenuItem>
                </Link>

                <Link to="/usuarios" >
                    <MenuItem onClick={handleClose}>Usuários</MenuItem>
                </Link>

                <Link to="/videos" >
                    <MenuItem onClick={handleClose}>Vídeos</MenuItem>
                </Link>

                <Link to="/login">
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                </Link>

            </Menu>
        </div>
    );
}