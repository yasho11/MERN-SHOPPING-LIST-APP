import React, {useState} from 'react';
import {TextField, Button, Container, Box, Typography, Link} from '@umi/material';
import API from '../services/api';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const handleLogin = async () => {
        try {
            const response = await API.post('/users/login', {email, password});
            console.log(response.data);

            history.push('/lists');
        }catch (error){
            console.error(error);
        }
    };

    return (
        <Container maxWidth = "xs">
            <Box sx = {{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <Box component="form" sx={{ mt:1}}>
                <TextField
                margin = "normal"
                reuqired
                fullwidth
                label = "Email Address"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) = setEmail(e.target.value)}
                />
                <TextField
                margin = "normal"
                reuqired
                fullwidth
                label = "Password"
                type = "password"
                autoComplete = "current-password"
                value ={password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <Button type= "button"
                fullwidth
                variant="contained"
                sx={{mt:3, mb:2}}
                onClick={handleLogin}>
                    Log In
                </Button>

                <Link href="/signup"  variant="body2">
                Don't have an account? Sign up
                </Link>
            </Box>
            </Box>
        </Container>
    );
};


export default Login;