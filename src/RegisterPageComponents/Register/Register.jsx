import React from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { Link as RouterLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register__section section'>
          <div className='register__container container'>
            <h2 className='register__title'>Załóż konto</h2>
            <img src={Decoration} alt='decoration' className='register__decoration'></img>
            <form className='register__form'>
              <div className='register__inputs'>
                <label htmlFor='text'>E-mail</label>
                <input type='text' id='text'></input>
                <label htmlFor='password'>Hasło</label>
                <input type='password' id='password'></input>
                <label htmlFor='repeatPassword'>Powtórz hasło</label>
                <input type='password' id='repeatPassword'></input>
              </div>
              <div className='register__btns'>
                <RouterLink to='/login' className='xd'>Zaloguj</RouterLink>
                <button className='register__submit' type='submit'>Załóż konto</button>
              </div>
            </form>
          </div>
    </div>
    );
}

export default Register;