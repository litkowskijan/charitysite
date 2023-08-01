import React from 'react';

import FormHome from '../Step1Components/FormHome/FormHome';
import FormWarning2 from './FormWarning2/FormWarning2';
import Form2 from './Form2/Form2';
import Contact from '../LandingPageComponents/Contact/Contact';

function Step2() {
    return (
        <>
            <FormHome />
            <FormWarning2 />
            <Form2 />
            <Contact />
        </>
    )
}

export default Step2;