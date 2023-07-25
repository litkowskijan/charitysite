import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMainForm } from '../../formcontext';
import clsx from 'clsx';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Form3 = () => {
    const cities = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice'];
    const options = ['dzieciom', 'samotnym matkom', 'bezdomnym', 'niepełnosprawnym', 'osobom starszym'];
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { location, setLocation, helpTarget, setHelpTarget, organization, setOrganization } = useMainForm();
    const [ isOptionSelected, setIsOptionSelected ] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log('Wybrane miasto:', location);
        console.log('Wybrane opcje:', helpTarget);
        console.log('Wiadomość:', organization);
        navigate('/step4')
    };

    const handleCheckboxChange = (option) => {
        setHelpTarget(option);
        setIsOptionSelected(true);
    };

    return (
        <div className='form__section section'>
            <div className='form__container container'>
                <span className="form__step">Krok 3/4</span>
                <span className='form__title'>Lokalizacja:</span>
                <div className='form__content'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select
                            {...register('location', { required: 'Wybierz miasto' })}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value=''>-- Wybierz miasto --</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        {errors.location && <p className='error'>{errors.location.message}</p>}
                        
                        <div className='form__options__title'>Komu chcesz pomóc?</div>
                        <div className='form__options'>
                            {options.map((option) => (
                                <div
                                    key={option}
                                    className={clsx('form__option', { 'form__option__selected': helpTarget === option })}
                                    onClick={() => handleCheckboxChange(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                        {isOptionSelected ? null : <p className='error'>Wybierz przynajmniej jedną opcję.</p>}

                        <span className='form__organization__title'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</span>
                        <input
                            type='text'
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            placeholder='Wpisz swoją wiadomość...'
                        />

                        <div className='form__buttons'>
                            <RouterLink to='/step2'>Wstecz</RouterLink>
                            <button type='submit'>Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form3;