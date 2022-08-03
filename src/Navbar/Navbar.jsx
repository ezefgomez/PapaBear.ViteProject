import React from 'react'
import carrito from './carrito.png'

/*
export default function Navbar() {
    return (
        <nav>
            <div>
                <h1 style={{backgroundColor:"grey", margin: "0", padding:"10px",color: "black", width: "350px", display:"inline-block", fontSize: "2em"}}>PapaBear supply</h1>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>Nuestros Productos</button>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>Sobre Nosotros</button>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}>Contactanos</button>
                <button type="button" style={{backgroundColor:"grey", height: "50px", width: "250px", display:"inline-block"}}><img src={carrito} alt="" style={{width: "50px", height: "30px"}} /></button>
            </div>
        </nav>
    )
}
*/

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Productos', 'Promociones', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">

        <Container maxWidth="xl">

            <Toolbar disableGutters>

            <Typography variant="h3" noWrap component="a" href="/" sx={{ mr: 10, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: "700", letterSpacing: '.1rem', color: 'black', textDecoration: 'none'}}>
                PAPABEAR
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                </IconButton>

                <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} keepMounted transformOrigin={{vertical: 'top',horizontal: 'left'}} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' },}}>

                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}

                </Menu>

            </Box>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Typography variant="h3" noWrap component="a" href="" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none'}}>
                PAPABEAR
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', marginRight: '30px', marginLeft: '30px'}}>
                    {page}
                </Button>
                ))}
            </Box>

            <button type="button" style={{backgroundColor:"#2964EC", height: "50px", width: "50px", marginRight: "300px", display:"inline-block"}}><img src={carrito} alt="" style={{width: "50px", height: "30px"}} /></button>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="" />
                </IconButton>
                </Tooltip>
                <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right'}} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>

            </Toolbar>

        </Container>

        </AppBar>
    );
};


