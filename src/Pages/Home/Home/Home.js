import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExpoCare from '../ExpoCare/ExpoCare';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services> </Services>
            <ExpoCare></ExpoCare>
            <AppointmentBanner></AppointmentBanner>
            <Contact></Contact>

        </div>
    );
};

export default Home;