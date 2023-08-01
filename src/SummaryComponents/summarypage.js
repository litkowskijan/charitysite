import React from 'react';

import FormHome from '../Step1Components/FormHome/FormHome';
import Summary from './Summary/Summary';
import Contact from '../LandingPageComponents/Contact/Contact';

function SummaryPage() {
    return (
        <>
            <FormHome />
            <Summary />
            <Contact />
        </>
    )
}

export default SummaryPage;