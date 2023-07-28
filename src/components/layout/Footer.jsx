import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <footer>
                <Typography component="p" variant="p" bgcolor="#f7f7f7" color="primary" padding="10px" textAlign="center" marginTop={5}>پروژه وبلاگ ریکتی با GraphQL و Material UI</Typography>
            </footer>
        </div>
    );
};

export default Footer;