import React, { useState } from 'react';
import Decoration from '../../Assets/Decoration.svg';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const [isSent, setIsSent] = useState(false)

    const { handleSubmit, register, formState: { errors }, reset} = useForm();

    const isSingleWord = (value) => {
        return value && value.trim().split(/\s+/).length === 1;
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const db = await response.json();
            console.log('Odpowiedź z API:', db.status === 'success')

            setIsSent(true);
            clearTimeout(setTimeout);

            reset();
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
                    {isSent && <div className='contact__success'>Wysłano wiadomość!</div>}
                    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className='contact__form__1row'>
                            <div className='contact__name__part'>
                                <label htmlFor='inputName'>Wpisz swoje imię</label>
                                <input id='inputName' placeholder='Krzysztof' {...register('name', { required: 'Pole jest wymagane', validate: { singleWord: isSingleWord } })}></input>
                                {errors.name && <p className='error'>{errors.name.message}</p>}
                                {errors.name?.type === 'singleWord' && <p className='error'>Imię musi być jednym wyrazem</p>}
                            </div>
                            <div className='contact__email__part'>
                                <label htmlFor='inputEmail'>Wpisz swój email</label>
                                <input id='inputEmail' placeholder='abc@xyz.pl' {...register('email', { required: 'Pole jest wymagane', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}></input>
                                {errors.email && <p className='error'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='error'>Adres e-mail jest nieprawidłowy</p>}
                            </div>
                        </div>
                        <label htmlFor='inputMessage'>Wpisz swoją wiadomość</label>
                        <textarea
                            id='inputMessage'
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            {...register('message', { required: 'Pole jest wymagane', minLength: 120 })}
                        ></textarea>
                        {errors.message && <p className='error'>{errors.message.message}</p>}
                        {errors.message?.type === 'minLength' && <p className='error'>Wiadomość musi mieć 120 znaków.</p>}
                        <button className='contact__form__button' type='submit'>Wyślij</button>
                    </form>
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