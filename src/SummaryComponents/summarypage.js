import React from 'react';

import Navbar from '../LandingPageComponents/Navbar/Navbar';
import FormHome from '../Step1Components/FormHome/FormHome';
import Summary from './Summary/Summary';
import Contact from '../LandingPageComponents/Contact/Contact';

function SummaryPage() {
    return (
        <>
            <Navbar />
            <FormHome />
            <Summary />
            <Contact />
        </>
    )
}

export default SummaryPage;