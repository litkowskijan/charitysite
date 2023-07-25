// import 'firebase/compat/firestore';
// import { db } from '../../firebase';
// import { collection } from 'firebase/firestore';
// import { useCollection } from 'react-firebase-hooks/firestore';

// const [value, loading, error] = useCollection(
//     collection(db, 'charities'),
//   );

// return (
//   <>
//     {error && <strong>Error</strong>}
//     {loading && <span>Collection: Loading...</span>}
//     {value && (
//       <>
//         {value.docs.map((item) => (
//           <h1>
//               {item.data().name}
//           </h1>
//         ))}
//       </>
//     )}
//   </>
// );





// LOGIN

// import React, { useState } from 'react';
// import { app } from '../../firebase';
// import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const auth = getAuth(app);

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate()

//   const handleLogin = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth,email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log('Zalogowano:', user);
//         navigate("/")
//       })
//       .catch((error) => {
//         console.log('Błąd logowania:', error);
//       });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
    
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log('Zarejestrowano:', user);
//       })
//       .catch((error) => {
//         console.log('Błąd rejestracji:', error);
//       });
//   };

//   return (
//     <div className='login__section'>
//       <div className='login__container container'>
//         <form>
//           <input
//             type='text'
//             placeholder='login'
//             value={email}
//             onChange={handleLogin}
//           />
//           <input
//             type='password'
//             placeholder='password'
//             value={password}
//             onChange={handlePassword}
//           />
//           <button type='submit' onClick={handleSubmit}>
//             Zaloguj
//           </button>
//           <button type='submit' onClick={handleRegister}>
//             Zarejestruj
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


/*
<div className='form__section section'>
    <div className='form__container container'>
        <span className="form__step">Krok 1/4</span>
        <span className='form__title'>Zaznacz co chcesz oddać:</span>
        <div className='form__content'>

        </div>
    </div>
</div> 
*/