import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://damp-springs-90927.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [date])

    return (
        <div>
            <h2>Appointments: {appointments.length}</h2>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointement) => (
                            <TableRow
                                key={appointement._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{appointement.patientName
                                }</TableCell>
                                <TableCell component="th" scope="row">
                                    {appointement.time}
                                </TableCell>

                                <TableCell align="right">{appointement.serviceName}</TableCell>
                                <TableCell align="right">{appointement.fat}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;