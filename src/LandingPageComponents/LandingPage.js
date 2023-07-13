import React from 'react';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Statistics from './Statistics/Statistics';
import Instruction from './Instruction/Instruction';
import About from './About/About';
import Charities from './Charities/Charities';
import Contact from './Contact/Contact'; 

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Statistics />
      <Instruction />
      <About />
      <Charities />
      <Contact />
    </>
  );
}

export default App;
