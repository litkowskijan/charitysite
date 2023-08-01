import React, { useEffect, useState } from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { IoMdShirt, IoMdClose } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from '../../authcontext';
import { app } from '../../firebase'
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(app);

const Navbar = () => {

    const [hamburger, setHamburger] = useState('navbar__hamburger__box left500');
    const navigate = useNavigate();
    
    const showHamburger = () => {
        setHamburger('navbar__hamburger__box left0');
    }

    const hideHamburger = () => {
        setHamburger('navbar__hamburger__box left500');
    }
    
    const { user } = useAuth();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('Wylogowano pomyślnie');
                navigate('/logout');
            })
            .catch((error) => {
                console.log('Błąd wylogowania:', error);
            })
    }

    const handleHamburgerLogout = () => {
        handleLogout();
        hideHamburger();
    }
    const [navbarColor, setNavbarColor] = useState('navbar__section section')

    const addColor = () => {
        if(window.scrollY >= 1) {
            setNavbarColor('navbar__section section navbar__color')
        }
        else {
            setNavbarColor('navbar__section section')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', addColor)

        return () => {
            window.removeEventListener('scroll', addColor)
        }
        
    }, [])

    return (
        <div className={navbarColor}>
            <div className='navbar__container container'>
                <IoMdShirt className='navbar__logo'></IoMdShirt>
                <div className='navbar__box'>
                    <div className='navbar__btns'>
                        {user?.email ? 
                            (<div className='navbar__hello'>Cześć {user?.email}!</div>)
                             : 
                            (<></>)
                        }
                        {user?.email ?
                            (<RouterLink to='/step1' className='navbar__give__btn'>Oddaj rzeczy</RouterLink>)
                            :
                            (<RouterLink to='/login' className='navbar__login__btn'>Zaloguj</RouterLink>)
                        }
                        {user?.email ?
                            (<button className='navbar__logout__btn' onClick={handleLogout}>Wyloguj</button>)
                            :
                            (<RouterLink to='/register' className='navbar__signup__btn'>Załóż konto</RouterLink>)
                        } 
                    </div>
                    <ul className='navbar__menu'>
                        <li className='navbar__menu__el first__el'><RouterLink to='/'>Start</RouterLink></li>
                        <li className='navbar__menu__el'><ScrollLink to='instruction' smooth={true} offset={-130}>O co chodzi?</ScrollLink></li>
                        <li className='navbar__menu__el'><ScrollLink to='about' smooth={true} offset={-140}>O nas</ScrollLink></li>
                        <li className='navbar__menu__el'><ScrollLink to='charities' smooth={true} offset={-120}>Fundacja i organizacje</ScrollLink></li>
                        <li className='navbar__menu__el'><ScrollLink to='contact' smooth={true} offset={0}>Kontakt</ScrollLink></li>
                    </ul>
                </div>
                <GiHamburgerMenu className='navbar__hamburger__open' onClick={showHamburger}></GiHamburgerMenu>
            </div>
            <div className={hamburger}>
                <div>
                    <IoMdClose className='navbar__hamburger__exit' onClick={hideHamburger}></IoMdClose>
                </div>
                {user?.email ? 
                        (<div className='navbar__hello'>Cześć {user?.email}!</div>)
                         : 
                        (<></>)
                }
                <div className='navbar__btns'>
                    {user?.email ?
                        (<RouterLink to='/step1' className='navbar__give__btn' onClick={hideHamburger}>Oddaj rzeczy</RouterLink>)
                        :
                        (<RouterLink to='/login' className='navbar__login__btn' onClick={hideHamburger}>Zaloguj</RouterLink>)
                    }
                    {user?.email ?
                        (<RouterLink to='/' className='navbar__logout__btn' onClick={handleHamburgerLogout}>Wyloguj</RouterLink>)
                        :
                        (<RouterLink to='/register' className='navbar__signup__btn' onClick={hideHamburger}>Załóż konto</RouterLink>)
                    }
                </div>
                <ul className='navbar__menu'>
                    <li className='navbar__menu__el first__el'><RouterLink className='first__el' to='/' onClick={hideHamburger}>Start</RouterLink></li>
                    <li className='navbar__menu__el'><ScrollLink to='instruction' smooth={true} offset={-60} onClick={hideHamburger}>O co chodzi?</ScrollLink></li>
                    <li className='navbar__menu__el'><ScrollLink to='about' smooth={true} offset={-80} onClick={hideHamburger}>O nas</ScrollLink></li>
                    <li className='navbar__menu__el'><ScrollLink to='charities' smooth={true} offset={-40} onClick={hideHamburger}>Fundacja i organizacje</ScrollLink></li>
                    <li className='navbar__menu__el'><ScrollLink to='contact' smooth={true} offset={-110} onClick={hideHamburger}>Kontakt</ScrollLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;