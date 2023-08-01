import React from 'react';

import FormHome from '../Step1Components/FormHome/FormHome';
import FormWarning3 from '../Step3Components/FormWarning3/FormWarning3';
import Form3 from '../Step3Components/Form3/Form3';
import Contact from '../LandingPageComponents/Contact/Contact';

function Step3() {
    return (
        <>
            <FormHome />
            <FormWarning3 />
            <Form3 />
            <Contact />
        </>
    )
}

export default Step3;