import React from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

const Contact = () => {
    return (
        <div className='contact__section section' id='contact'>
            <div className="contact__container container">
                <div className='contact__content'>
                    <h2 className='contact__title'>Skontaktuj się z nami</h2>
                    <img className='contact__decoration' src={Decoration} alt='decoration'></img>
                    <div className="contact__form">
                        <div className='contact__form__1row'>
                            <div className='contact__name__part'>
                                <label for='inputName'>Wpisz swoje imię</label>
                                <input type='text' id='inputName' placeholder='Krzysztof'></input>
                            </div>
                            <div className='contact__email__part'>
                                <label for='inputEmail'>Wpisz swój email</label>
                                <input type='email' id='inputEmail' placeholder='abc@xyz.pl'></input>
                            </div>
                        </div>
                        <label for='inputMessage'>Wpisz swoją wiadomość</label>
                        <textarea id='inputMessage' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
                        <button className='contact__form__button' type='submit'>Wyślij</button>
                    </div>
                </div>
            </div>
            <div className='contact__footer container'>
                <div className='contact__invisible'></div>
                <div className='contact__copyright'>Copyright by CodersLab</div>
                <div className='contact__footer__socials'>
                    <IoLogoFacebook className='contact__footer__social'></IoLogoFacebook>
                    <IoLogoInstagram className='contact__footer__social'></IoLogoInstagram>
                </div>
            </div>
        </div>
    );
}

export default Contact;