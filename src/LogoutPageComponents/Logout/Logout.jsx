import React from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { Link as RouterLink } from 'react-router-dom';

const Logout = () => {
    return (
        <div className='logout__section section'>
            <div className='logout__container container'>
                <h2 className="logout__title">Wylogowanie nastąpiło pomyślnie!</h2>
                <img className='logout__decoration' src={Decoration} alt='decoration'></img>
                <RouterLink className='logout__btn' to='/'>Strona główna</RouterLink>
            </div>
        </div>
    );
}

export default Logout;