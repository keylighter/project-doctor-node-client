import React, { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import TextField from '@mui/material/TextField';
import useAuth from '../../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {

    const { name, time, space } = booking;

    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
        e.preventDefault();
    }

    const handleBookingSubmit = e => {

        //collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        //send to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            //proceedings after getting sent data back here
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });



        e.preventDefault();
    }

    // Import From Booking
    // const [openBooking, setOpen]
    // const handleBookingOpen 
    // const handleBookingClose 

    return (
        // Modal - https://mui.com/components/modal/#transitions
        //Text-field -  https://mui.com/components/text-fields/#sizes



        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                // label=""
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '90%', m: 1 }}
                                // label=""
                                id="outlined-size-small"
                                name='patientName'
                                defaultValue={user.displayName}
                                size="small"
                                onBlur={handleOnBlur}
                            />
                            <TextField

                                sx={{ width: '90%', m: 1 }}
                                // label=""
                                id="outlined-size-small"
                                name='email'
                                defaultValue={user.email}
                                size="small"
                                onBlur={handleOnBlur}
                            />
                            <TextField

                                sx={{ width: '90%', m: 1 }}
                                // label=""
                                id="outlined-size-small"
                                name='phone'
                                defaultValue="Contact No"
                                size="small"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                disabled

                                sx={{ width: '90%', m: 1 }}
                                // label=""
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type='submit' style={{ backgroundColor: '#5CE7EE', marginTop: '20px' }} variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;