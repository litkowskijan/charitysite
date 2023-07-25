import React, { useState }from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { app } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../authcontext';

const auth = getAuth(app);

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setIsLoggedIn } = useAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Zalogowano:', user.email);
        navigate('/');
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log('Błąd logowania:', error);
      })
  }

  return (
    <div className='login__section section'>
      <div className='login__container container'>
        <h2 className='login__title'>Zaloguj się</h2>
        <img src={Decoration} alt='decoration' className='login__decoration'></img>
        <form className='login__form'>

          <div className='login__inputs'>
            <label htmlFor='text'>E-mail</label>
            <input type='text' id='text' onChange={handleEmail}></input>
            <label htmlFor='password'>Hasło</label>
            <input type='password' id='password' onChange={handlePassword}></input>
          </div>
          
          <div className='login__btns'>
            <RouterLink to='/register' className='login__register__btn'>Załóż konto</RouterLink>
            <button className='login__submit' type='submit' onClick={handleSubmit}>Zaloguj się</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;