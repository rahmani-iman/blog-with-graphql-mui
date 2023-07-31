import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_BLOG_INFO } from '../../graphql/queries';
import sanitizeHtml from 'sanitize-html';
import spinner from '../../assets/spinner.gif';
import { ArrowBackRounded } from '@mui/icons-material';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import CommentForm from '../comments/CommentForm';
import Comments from '../comments/Comments';

const BlogsPage = () => {

    const {slug} = useParams();
    const navigate = useNavigate();

    const {loading, data, error} = useQuery(GET_BLOG_INFO, {variables: {slug}});
    if (loading) return <div style={{width: "100%", height: "1000px",display: "flex", justifyContent: "center"}}><img src={spinner} alt='loading' style={{width: "150px", height: "150px"}}/></div>
    if (error) return <h3>Something went wrong</h3>
    return (
        <Container maxWidth="lg">
            <Grid container marginTop={10}>
                <Grid item xs={12} display="flex" justifyContent="space-between">
                    <Typography component="h2" variant="h4" fontWeight={700} fontSize="25px" color="primary">{data.post.title}</Typography>
                    <ArrowBackRounded onClick={() => navigate(-1)} sx={{ cursor: "pointer"}}/>
                </Grid>
                <Grid item xs={12} marginTop={6}>
                    <img src={data.post.coverPhoto.url} alt='coverPhoto' width="100%" style={{borderRadius: "10px"}}/>
                </Grid>
                <Grid item xs={12} marginTop={6} display="flex" alignItems="center">
                    <Avatar src={data.post.author.avatar.url} sx={{width: "80px", height: "80px", marginLeft: "10px"}}/>
                    <Box component="div">
                        <Typography component="p" variant="h6" fontWeight="700">{data.post.author.name}</Typography>
                        <Typography component="p" variant="h6" color="text.secondary">{data.post.author.field}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} marginTop={4}>
                    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}></div>
                </Grid>
                <Grid item xs={12} marginTop={5}>
                    <CommentForm slug={slug}/>
                </Grid>
                <Grid item xs={12} marginTop={5}>
                    <Comments slug={slug}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogsPage;