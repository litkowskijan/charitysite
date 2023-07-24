import React, { useState } from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
          email,
          name,
          message,
        };
    
        try {
            const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          const data = await response.json();
          console.log('Odpowiedź z API:', data.status === 'success');
    
          setEmail('');
          setName('');
          setMessage('');
        } catch (error) {
          console.error('Błąd wysyłki formularza:', error);
        }
      };

    return (
        <div className='contact__section section' id='contact'>
            <div className="contact__container container">
                <div className='contact__content'>
                    <h2 className='contact__title'>Skontaktuj się z nami</h2>
                    <img className='contact__decoration' src={Decoration} alt='decoration'></img>
                    <div className="contact__form">
                        <div className='contact__form__1row'>
                            <div className='contact__name__part'>
                                <label htmlFor='inputName'>Wpisz swoje imię</label>
                                <input type='text' id='inputName' placeholder='Krzysztof' value={name} onChange={(e) => setName(e.target.value)}></input>
                            </div>
                            <div className='contact__email__part'>
                                <label htmlFor='inputEmail'>Wpisz swój email</label>
                                <input type='email' id='inputEmail' placeholder='abc@xyz.pl' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <label htmlFor='inputMessage'>Wpisz swoją wiadomość</label>
                        <textarea id='inputMessage' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
                        <button className='contact__form__button' type='submit' onClick={handleSubmit}>Wyślij</button>
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