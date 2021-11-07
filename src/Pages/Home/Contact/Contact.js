import React from 'react';

import { Button, Card, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

import Typography from '@mui/material/Typography';


const Contact = () => {
    return (
        <Card sx={{ backgroundColor: 'black' }}>
            <Container style={{ maxWidth: 550, margin: "0 auto" }}>
                <Box>
                    <Typography style={{ fontWeight: 500, color: 'white', marginTop: 30, }} variant="h5" gutterBottom component="div">
                        Contact Us
                    </Typography>
                    <Typography style={{ fontWeight: 500, color: 'white' }} variant="h6" gutterBottom component="div">
                        Always connect with us with valueable thaughts
                    </Typography>
                </Box>
                <Box sx={{ mt: 5, mb: 4, }}>
                    <form onSubmit=''>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                                <TextField
                                    sx={{ backgroundColor: 'white' }}
                                    label="Email" id="outlined-size-normal"
                                    fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white' }}
                                    label="Subject" id="outlined-size-normal"
                                    fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ backgroundColor: 'white' }}
                                    label="Feedback" id="outlined-size-normal"
                                    multiline
                                    rows={4}
                                    fullWidth />
                            </Grid>
                            <Grid item xs={10}>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    style={{ backgroundColor: '#5CE7ED' }}
                                >Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box >
            </Container>
        </Card>
    );
};

export default Contact;