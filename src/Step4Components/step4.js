import React from 'react';

import Navbar from '../LandingPageComponents/Navbar/Navbar';
import FormHome from '../Step1Components/FormHome/FormHome';
import FormWarning4 from './FormWarning4/FormWarning4';
import Form4 from './Form4/Form4';
import Contact from '../LandingPageComponents/Contact/Contact';

function Step4() {
    return (
        <>
            <Navbar />
            <FormHome />
            <FormWarning4 />
            <Form4 />
            <Contact />
        </>
    )
}

export default Step4;