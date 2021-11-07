import React, { useState } from 'react';

import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, isLoading, loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;

        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        // if (loginData.password !== loginData.passwordretype) {
        //     alert('password is not matched');
        //     return;
        // }

        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography
                        sx={{ mt: 8, pt: 8 }}
                        variant="body1" gutterBottom>
                        Login
                        <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: 3 / 4, m: 1 }}
                                name='email'
                                onBlur={handleOnBlur}
                                id="standard-basic" label="Email" variant="standard" />

                            <TextField
                                sx={{ width: 3 / 4, m: 1 }}
                                type='password'
                                name='password'
                                onBlur={handleOnBlur}
                                id="standard-basic" label="Password" variant="standard" />


                            <Button
                                sx={{ width: 3 / 4, m: 1, backgroundColor: '#5CE7ED' }}
                                variant='contained'
                                type='submit'
                            >
                                Login
                            </Button>

                            <NavLink style={{ textDecoration: 'none' }} to='/register'>
                                <Button variant="text">New User ? <span>Register Here</span></Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>

                        <Button
                            sx={{ width: 1 / 4, m: 1, backgroundColor: '#5CE7ED' }}
                            variant='contained'
                            type='submit'
                            onClick={handleGoogleSignIn}
                        >
                            Google SignIn
                        </Button>
                        <Button
                            sx={{ width: 1 / 4, m: 1, backgroundColor: '#5CE7ED' }}
                            variant='contained'
                            type='submit'
                        >
                            GitHub SignIn
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <img src={login} />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;