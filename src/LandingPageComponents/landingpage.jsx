import React from 'react';

import Home from './Home/Home';
import Statistics from './Statistics/Statistics';
import Instruction from './Instruction/Instruction';
import About from './About/About';
import Charities from './Charities/Charities';
import Contact from './Contact/Contact'; 

function LandingPage() {
  return (
    <>
      <Home />
      <Statistics />
      <Instruction />
      <About />
      <Charities />
      <Contact />
    </>
  );
}

export default LandingPage;