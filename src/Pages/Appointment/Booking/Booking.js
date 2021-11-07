import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from './BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;


    const [openBooking, setOpen] = React.useState(false);
    const handleBookingOpen = () => setOpen(true);
    const handleBookingClose = () => setOpen(false);

    return (



        <>
            <Grid item xs={8} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }} >
                    {/* https://mui.com/components/typography/#component */}
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space}  Spaces Avialable
                    </Typography>

                    <Button onClick={handleBookingOpen} style={{ backgroundColor: '#5CE7EE', marginTop: '20px' }} variant="contained">Book Appointment</Button>

                </Paper>

            </Grid>
            <BookingModal
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                date={date}
                setBookingSuccess={setBookingSuccess}
            >

            </BookingModal>
        </>

    );
};

export default Booking;