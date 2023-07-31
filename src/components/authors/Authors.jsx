import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../../graphql/queries';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import spinner from '../../assets/spinner.gif';

const Authors = () => {

    const {loading, data, error} = useQuery(GET_AUTHORS_INFO);

    if (loading) return <img src={spinner} alt='loading' style={{width: "50px"}} />
    if (error) return <h3>Something went wrong</h3>
    return (
            <Grid container sx={{ maxWidth: 345, boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px", borderRadius: "8px", padding: "10px" }}>
                {data?.authors.map((author, index) => <Grid item xs={12} padding={1} key={author.id}>
                    <Link to={`/authors/${author.slug}`} style={{textDecoration: "none", width: "100%", display: "flex", alignItems: "center"}}>
                        <Avatar src={author.avatar.url} sx={{marginLeft: 2}}/>
                        <Typography component="p" variant="p" color="text.secondary">{author.name}</Typography>
                    </Link>
                    {index !== data.authors.length -1 && (<Divider variant="middle" sx={{marginTop: "20px"}} />)}
                </Grid>)}
            </Grid>
    );
};

export default Authors;