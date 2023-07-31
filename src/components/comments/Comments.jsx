import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMMENT } from '../../graphql/queries';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import sanitizeHtml from 'sanitize-html';
import spinner from '../../assets/spinner.gif';

const Comments = ({slug}) => {

    const {loading, data, error} = useQuery(GET_COMMENT, {variables: {slug}});

    if (loading) return <img src={spinner} alt='loading' style={{width: "50px"}}/>
    if (error) return <h3>Something went wrong</h3>
    return (
        <Grid container sx={{boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px", borderRadius: "15px", padding: "16px", marginTop: "10px"}}>
            <Grid item xs={12}>
                <Typography component="p" variant="h6" fontWeight="700" color="primary">نظرات</Typography>
            </Grid>
            {data?.comments.map(comment => {
                return <Grid item xs={12} key={comment.id} margin={2} padding={2} border="1px silver solid" borderRadius={1}>
                    <Box component="div" display="flex" alignItems="center" mb={3}>
                        <Avatar>{comment.name[0]}</Avatar>
                        <Typography component="span" variant="p" fontWeight="700" mr={1}>{comment.name}</Typography>
                    </Box>
                    <Typography component="p" variant="p">{comment.text}</Typography>
                </Grid>
            })}
        </Grid>
    );
};

export default Comments;