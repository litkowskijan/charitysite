import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './authcontext';
import { FormProvider } from './formcontext';
import LandingPage from './LandingPageComponents/landingpage.js'
import LoginPage from './LoginPageComponents/loginpage';
import RegisterPage from './RegisterPageComponents/registerpage'
import LogoutPage from './LogoutPageComponents/logoutpage';
import Step1 from './Step1Components/step1';
import Step2 from './Step2Components/step2';
import Step3 from './Step3Components/step3';
import Step4 from './Step4Components/step4';
import SummaryPage from './SummaryComponents/summarypage';
import './main.scss';
import Navbar from './LandingPageComponents/Navbar/Navbar';


const Root = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FormProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/logout' element={<LogoutPage />}/>
            <Route path='/step1' element={<Step1 />}/>
            <Route path='/step2' element={<Step2 />}/>
            <Route path='/step3' element={<Step3 />}/>
            <Route path='/step4' element={<Step4 />}/>
            <Route path='/summary' element={<SummaryPage />}/>
          </Routes>
        </FormProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<Root />);