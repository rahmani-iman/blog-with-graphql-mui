import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import sanitizeHtml from 'sanitize-html';
import CardEL from '../shared/CardEL';
import spinner from '../../assets/spinner.gif';

const AuthorsPage = () => {

    const { slug } = useParams();
    const {loading, data, error} = useQuery(GET_AUTHOR_INFO, {variables: {slug}});
    if (loading) return <div style={{width: "100%", height: "1000px",display: "flex", justifyContent: "center"}}><img src={spinner} alt='loading' style={{width: "150px", height: "150px"}}/></div>
    if (error) return <h3>Something went wrong</h3>
    return (
        <Container maxWidth="lg">
            <Grid container marginTop={10}>
                <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                    <Avatar src={data.author.avatar.url} sx={{width: "250px", height: "250px"}}/>
                    <Typography component="h3" variant="h5" fontWeight="700" marginTop={4}>{data.author.name}</Typography>
                    <Typography component="p" variant="h5" color="text.secondary" marginTop={2}>{data.author.field}</Typography>
                </Grid>
                <Grid item xs={12} marginTop={5}>
                    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.author.description.html)}}></div>
                </Grid>
                <Grid item xs={12} marginTop={7}>
                    <Typography component="h3" variant="h5" fontWeight={700} fontSize="20px">مقالات {data.author.name}</Typography>
                </Grid>
                <Grid container spacing={2} marginTop={2}>
                    {data?.author.posts.map((post) => {
                        return <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthorsPage;