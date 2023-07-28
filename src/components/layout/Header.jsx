import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant='h5' component='h1' flex={1}>وبلاگ دوره ریکت</Typography>
                    <LaptopChromebookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;