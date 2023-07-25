import React from 'react';
import Decoration from '../../Assets/Decoration.svg';

const FormHome = () => {
    return (
        <div className='form__home__section section'>
            <div className='form__home__container container'>
                <h2 className="form__home__title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                <img className='form__home__decoration' src={Decoration} alt="decoration" />
                <span className='form__home__steps__title'>Wystarczą 4 proste kroki</span>
                <div className='form__home__steps__boxes'>
                    <div className="form__home__step__box">
                        <div className='form__home__step__border'></div>
                        <div className='form__home__step__content'>
                            <span className="form__home__step__number">1</span>
                            <span className="form__home__step__text">Wybierz rzeczy</span>
                        </div>
                    </div>
                    <div className="form__home__step__box">
                        <div className='form__home__step__border'></div>
                        <div className='form__home__step__content'>
                            <span className="form__home__step__number">2</span>
                            <span className="form__home__step__text">Spakuj je w worki</span>
                        </div>
                    </div>
                    <div className="form__home__step__box">
                        <div className='form__home__step__border'></div>
                        <div className='form__home__step__content'>
                            <span className="form__home__step__number">3</span>
                            <span className="form__home__step__text">Wybierz fundację</span>
                        </div>
                    </div>
                    <div className="form__home__step__box">
                        <div className='form__home__step__border'></div>
                        <div className='form__home__step__content'>
                            <span className="form__home__step__number">4</span>
                            <span className="form__home__step__text">Zamów kuriera</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormHome;