import React from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../authcontext';

const Home = () => {

    const { isLoggedIn } = useAuth();

    return (
        <div className='home__section section'>
            <div className='home__container container'>
                <div className='home__box'>
                    <h2 className='home__title'>Zacznij pomagać!</h2>
                    <p className='home__lead'>Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={Decoration} alt='decoration' className='home__decoration'></img>
                    <div className='home__btns'>
                        {isLoggedIn ?
                            (<RouterLink to='/step1' className='home__btn'>ODDAJ<br />RZECZY</RouterLink>)
                            :
                            (<RouterLink to='/login' className='home__btn'>ODDAJ<br />RZECZY</RouterLink>)
                        }
                        <RouterLink className='home__btn'>ZORGANIZUJ<br />ZBIÓRKĘ</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;