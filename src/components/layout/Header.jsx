import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant='h5' component='h1' flex={1}>
                        <Link to="/" style={{textDecoration: "none", color: "#fff"}}>
                        وبلاگ دوره ریکت
                        </Link>
                    </Typography>
                    <LaptopChromebookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;