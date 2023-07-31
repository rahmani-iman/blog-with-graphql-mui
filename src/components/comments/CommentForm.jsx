import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button ,Grid, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PendingIcon from '@mui/icons-material/Pending';
import { CREATE_COMMENT } from '../../graphql/mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({slug}) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [pressed, setPressed] = useState(false);

    const [sendComment, {loading, data}] = useMutation(CREATE_COMMENT, {variables: {name, email, text, slug}});
    const sendHandler = () => {
        if (name && email && text) {
            sendComment();
            setPressed(true);
            toast.success("با تشکر پیام شما پس از تایید در سایت نمایش داده خواهد شد")
        } else {
            toast.warn("لطفا تمام فیلدها را پر کنید")
        }
        (data, pressed &&
            setName(""),
            setEmail(""),
            setText("")
        );
        setPressed(false);
    }

    return (
        <Grid container sx={{boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px", borderRadius: "15px", paddingY: "8px", marginTop: "10px"}}>
            <Grid item xs={12} margin={2}>
                <Typography component="p" variant="h6" fontWeight="700" color="primary">فرم ارسال نظر</Typography>
            </Grid>
            <Grid item xs={12} margin={2}>
                <TextField id="outlined-basic" label="نام خود را وارد کنید" variant="outlined" sx={{width: "100%"}} value={name} onChange={(e) => setName(e.target.value)}/>
            </Grid>
            <Grid item xs={12} margin={2}>
                <TextField id="outlined-basic" label="ایمیل خود را وارد کنید" variant="outlined" sx={{width: "100%"}} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={12} margin={2}>
                <TextField id="outlined-basic" label="نظر خود را بنویسید" variant="outlined" multiline minRows={4} sx={{width: "100%"}} value={text} onChange={(e) => setText(e.target.value)}/>
            </Grid>
            <Grid item xs={12} margin={2}>
                {loading ?
                (<Button variant="contained" disabled startIcon={<PendingIcon sx={{ml: "10px", mr: "-10px"}}/>}>در حال ارسال</Button>) :
                (<Button variant="contained" startIcon={<SendIcon sx={{ml: "10px", mr: "-10px"}}/>} onClick={sendHandler}>ارسال</Button>)
                }
            </Grid>
            <ToastContainer></ToastContainer>
        </Grid>
    );
};

export default CommentForm;