import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import treatment from '../../../images/treatment.png';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,


}

const ExpoCare = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ mt: 4, pt: 5, pb: 5 }}>

                <Grid item xs={10} md={6} style={{ ...verticalCenter, }}>
                    <img style={{ width: '400px', height: 'auto' }} src={treatment}></img>
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={10} md={6}>
                    <Box>
                        <Typography sx={{ fontWeight: 700 }} variant="h3">
                            Exponential Dental Care<br />
                            For Your Better Life
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur. Lorem velit illum enim incidunt doloremque vitae impedit at accusantium tenetur. L
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>


            </Grid>
        </Container >
    );
};

export default ExpoCare;