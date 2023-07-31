import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardContent, Avatar, Typography, Divider, Button} from '@mui/material';
import { Link } from 'react-router-dom';


const CardEL = (props) => {

    const {title, slug, coverPhoto, author} = props;
    return (
    <Card sx={{ maxWidth: 345, boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px", borderRadius: "8px" }}>
        {author && 
            <CardHeader
                avatar={
                <Avatar sx={{ marginLeft : 2 }} src={author.avatar.url}></Avatar>}
                title={<Typography component="p" variant="p" color="text.primary">{author.name}</Typography>}
        />}
        <CardMedia
            component="img"
            height="194"
            src={coverPhoto.url}
            alt={slug}
        />
        <CardContent>
            <Typography variant="h6" component="h3" color="text.secondary" overflow="hidden">{title}</Typography>
        </CardContent>
        <Divider variant='middle' />
        <CardActions>
            <Link to={`/blogs/${slug}`} style={{textDecoration: "none", width: "100%"}}>
                <Button variant="outlined" sx={{width: "100%", borderRadius: "8px"}}>مطالعه مقاله</Button>
            </Link>
        </CardActions>
    </Card>
    );
};

export default CardEL;