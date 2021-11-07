import React, { useState } from 'react';

import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';

import login from '../../../images/login.png'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {


    const [registerData, setRegisterData] = useState({});
    const { user, isLoading, registerUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;

        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);


    }

    const handleRegister = e => {
        if (registerData.password !== registerData.passwordretype) {
            alert('password is not matched');
            return;
        }

        registerUser(registerData.email, registerData.password, registerData.name, location, history);
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
                        Register
                        {
                            !isLoading &&
                            <form onSubmit={handleRegister}>
                                <TextField
                                    sx={{ width: 3 / 4, m: 1 }}
                                    name='name'
                                    onBlur={handleOnBlur}
                                    id="standard-basic"
                                    label="Name"
                                    variant="standard" />
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
                                <TextField
                                    sx={{ width: 3 / 4, m: 1 }}
                                    type='password'
                                    name='passwordretype'
                                    onBlur={handleOnBlur}
                                    id="standard-basic" label="Retype Password " variant="standard" />


                                <Button
                                    sx={{ width: 3 / 4, m: 1, backgroundColor: '#5CE7ED' }}
                                    variant='contained'
                                    type='submit'
                                >
                                    Register
                                </Button>

                                <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                    <Button variant="text">Already Registered? <span>Please Login</span></Button>
                                </NavLink>

                            </form>
                        }
                        <br />
                        {
                            isLoading &&

                            <CircularProgress />


                        }
                        {
                            user.email &&

                            <Alert severity="success">Registration Completed!</Alert>

                        }
                        {
                            authError &&
                            <Alert severity="error">Registration is not done!</Alert>

                        }

                        <Button
                            sx={{ width: 1 / 4, m: 1, backgroundColor: '#5CE7ED' }}
                            variant='contained'
                            type='submit'
                            onClick={handleGoogleSignIn}
                        >
                            Google SignIn
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

export default Register;