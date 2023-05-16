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
                    <MenuItem className="text-decorator-none" onClick={handleClose}>Home</MenuItem>
                </Link>

                <MenuItem onClick={handleClose}>Postagens</MenuItem>
                <MenuItem onClick={handleClose}>Temas</MenuItem>
                <MenuItem onClick={handleClose}>Usuários</MenuItem>

                <Link to="/login">
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                </Link>

            </Menu>
        </div>
    );
}