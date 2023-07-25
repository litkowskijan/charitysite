import React from 'react';

import Navbar from '../LandingPageComponents/Navbar/Navbar';
import FormHome from './FormHome/FormHome';
import FormWarning from './FormWarning/FormWarning';
import Form from './Form/Form';
import Contact from '../LandingPageComponents/Contact/Contact';

function Step1() {
    return (
        <>
            <Navbar />
            <FormHome />
            <FormWarning />
            <Form />
            <Contact />
        </>
    )
}

export default Step1;