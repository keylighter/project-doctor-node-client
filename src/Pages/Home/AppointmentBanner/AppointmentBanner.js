import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} ></img>
                </Grid>
                <Grid sx={{
                    display: 'flex',
                    textAlign: 'left', alignItems: 'center'
                }} item xs={12} md={4}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 2 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{ mb: 2 }} style={{ color: 'white' }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant='p' sx={{ my: 3 }} style={{ color: 'white' }}>
                            Its a long story short ,you just have to click for appointment
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED', marginTop: '20px' }}>Learn More</Button>
                    </Box>
                </Grid >

            </Grid >
        </Box >
    );
};

export default AppointmentBanner;