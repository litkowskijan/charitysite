import React, { useState } from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { Link as RouterLink} from 'react-router-dom';
import { IoMdShirt, IoMdClose } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

    //-----HamburgerVisibility-----
    const [hamburger, setHamburger] = useState('navbar__hamburger__box left500');

    const showHamburger = () => {
        setHamburger('navbar__hamburger__box left0');
    }

    const hideHamburger = () => {
        setHamburger('navbar__hamburger__box left500');
    }
    //-----HamburgerVisibility-----
    
    return (
        <div className='navbar__section section'>
            <div className='navbar__container container'>
                <IoMdShirt className='navbar__logo'></IoMdShirt>
                <div className='navbar__box'>
                    <div className='navbar__btns'>
                        <RouterLink to='/login' className='navbar__login__btn'>Zaloguj</RouterLink>
                        <RouterLink to='/register' className='navbar__signup__btn'>Załóż konto</RouterLink>
                    </div>
                    <ul className='navbar__menu'>
                        <li className='navbar__menu__el'><ScrollLink className='first__el' to='#' smooth={true} ><RouterLink to='/'>Start</RouterLink></ScrollLink></li>
                        <li className='navbar__menu__el'><ScrollLink to='#' smooth={true} >O co chodzi?</ScrollLink></li>
                        <li className='navbar__menu__el'><ScrollLink to='#' smooth={true} >O nas</ScrollLink></li>
                        <li className='navbar__menu__el'><ScrollLink to='#' smooth={true} >Fundacja i organizacje</ScrollLink></li>
                        <li className='navbar__menu__el'><ScrollLink to='#' smooth={true} >Kontakt</ScrollLink></li>
                    </ul>
                </div>
                <GiHamburgerMenu className='navbar__hamburger__open' onClick={showHamburger}></GiHamburgerMenu>
            </div>
            <div className={hamburger}>
                <div>
                    <IoMdClose className='navbar__hamburger__exit' onClick={hideHamburger}></IoMdClose>
                </div>
                <div className='navbar__btns'>
                    <RouterLink to='/login' className='navbar__login__btn'>Zaloguj</RouterLink>
                    <RouterLink to='/register' className='navbar__signup__btn'>Załóż konto</RouterLink>
                </div>
                <ul className='navbar__menu'>
                    <li className='navbar__menu__el'><ScrollLink className='first__el' to='#' smooth={true} ><RouterLink to='/'>Start</RouterLink></ScrollLink></li>
                    <li className='navbar__menu__el'><ScrollLink to='#' smooth={true} >O co chodzi?</ScrollLink></li>
                    <li className='navbar__menu__el'><ScrollLink to='#' smooth={true} >O nas</ScrollLink></li>
                    <li className='navbar__menu__el'><ScrollLink to='#' smooth={true} >Fundacja i organizacje</ScrollLink></li>
                    <li className='navbar__menu__el'><ScrollLink to='#' smooth={true} >Kontakt</ScrollLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;