import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './authcontext';
import LandingPage from './LandingPageComponents/landingpage'
import LoginPage from './LoginPageComponents/loginpage';
import RegisterPage from './RegisterPageComponents/registerpage'
import './main.scss';

const Root = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />}/>
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<Root />);