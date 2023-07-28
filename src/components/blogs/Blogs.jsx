import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@mui/material';
import { GET_BLOGS_INFO } from '../../graphql/queries';
import CardEL from '../shared/CardEL';
import spinner from '../../assets/spinner.gif';

const Blogs = () => {

    const {loading, data, error} = useQuery(GET_BLOGS_INFO);

    if (loading) return <img src={spinner} alt='loading' style={{width: "50px"}}/>
    if (error) return <h3>Something went wrong</h3>
    return (
        <Grid container spacing={2}>
            {data?.posts.map(post => <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL {...post} />
                </Grid>)}
        </Grid>
    );
};

export default Blogs;