import React from 'react';
import Navigation from '../Home/Shared/Navigation/Navigation';
import AppointmentHead from './AppointmentHead/AppointmentHead';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    //state 
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHead date={date} setDate={setDate}></AppointmentHead>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;