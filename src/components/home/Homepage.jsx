import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Authors from '../authors/Authors';
import Blogs from '../blogs/Blogs';

const Homepage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} padding={3}>
                <Grid item xs={12} md={3}>
                    <Typography component="h3" variant="h5" marginY={5} fontWeight={700}>نویسنده‌ها</Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography component="h3" variant="h5" marginY={5} fontWeight={700}>مقالات</Typography>
                    <Blogs />
                </Grid>
            </Grid>
            
        </Container>
    );
};

export default Homepage;