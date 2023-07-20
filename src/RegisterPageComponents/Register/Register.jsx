import React, { useState, useContext } from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';
import { AuthContext } from '../../authcontext';

const auth = getAuth(app);

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');
  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setComfirmPassword(e.target.value);
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Hasła nie są identyczne');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Zarejestroowano:', user.email);
        navigate('/')

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('Zalogowano po rejestracji:', user.email);
            navigate('/');
            setIsLoggedIn(true);
          })
          .catch((error) => {
            console.log('Błąd logowania po rejestracji:', error);
          });

      })
      .catch((error) => {
        console.log('Błąd rejestracji:', error);
      })
  }

  return (
      <div className='register__section section'>
        <div className='register__container container'>
          <h2 className='register__title'>Załóż konto</h2>
          <img src={Decoration} alt='decoration' className='register__decoration'></img>
          <form className='register__form'>
            <div className='register__inputs'>
              <label htmlFor='text'>E-mail</label>
              <input type='text' id='text' onChange={handleEmail}></input>
              <label htmlFor='password'>Hasło</label>
              <input type='password' id='password' onChange={handlePassword}></input>
              <label htmlFor='repeatPassword'>Powtórz hasło</label>
              <input type='password' id='repeatPassword' onChange={handleConfirmPassword}></input>
            </div>
            <div className='register__btns'>
              <RouterLink to='/login' className='xd'>Zaloguj</RouterLink>
              <button className='register__submit' type='submit' onClick={handleRegister}>Załóż konto</button>
            </div>
          </form>
        </div>
  </div>
  );
}

export default Register;