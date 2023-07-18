import React from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  
  return (
    <div className='login__section section'>
      <div className='login__container container'>
        <h2 className='login__title'>Zaloguj się</h2>
        <img src={Decoration} alt='decoration' className='login__decoration'></img>
        <form className='login__form'>

          <div className='login__inputs'>
            <label htmlFor='text'>E-mail</label>
            <input type='text' id='text'></input>
            <label htmlFor='password'>Hasło</label>
            <input type='password'></input>
          </div>
          
          <div className='login__btns'>
            <RouterLink to='/register' className='login__register__btn'>Załóż konto</RouterLink>
            <button className='login__submit' type='submit'>Zaloguj się</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;