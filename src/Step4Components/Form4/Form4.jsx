import React from 'react';
import { useForm } from 'react-hook-form';
import { useMainForm } from '../../formcontext';

const Form4 = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const {
        setAddressStreet,
        setAddressCity,
        setAddressPostcode,
        setAddressPhoneNumber,
        setDeadlineDate,
        setDeadlineTime,
        deadlineNotes, setDeadlineNotes,
    } = useMainForm();

    const inputOptions = ['Ulica', 'Miasto', 'Kod pocztowy', 'Numer telefonu', 'Data', 'Godzina'];

    const onSubmit = (data) => {
        console.log('Dane z formularza:', data);
    };

    const handleInputChange = (option, value) => {
        switch (option) {
            case 'Ulica':
                setAddressStreet(value);
                break;
            case 'Miasto':
                setAddressCity(value);
                break;
            case 'Kod pocztowy':
                setAddressPostcode(value);
                break;
            case 'Numer telefonu':
                setAddressPhoneNumber(value);
                break;
            case 'Data':
                setDeadlineDate(value);
                break;
            case 'Godzina':
                setDeadlineTime(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className='form__section section'>
            <div className='form__container container'>
                <span className='form__step'>Krok 4/4</span>
                <span className='form__title'>Dane odbioru:</span>
                <div className='form__content'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {inputOptions.map((option) => (
                            <div key={option} className='form__input__container'>
                                <label>{option}:</label>
                                <input
                                type='text'
                                {...register(option, { required: `To pole jest wymagane` })}
                                onChange={(e) => handleInputChange(option, e.target.value)}
                                />
                                {errors[option] && <p>{errors[option].message}</p>}
                            </div>
                        ))}

                        <div className='form__input__container'>
                            <label>Uwagi dla kuriera:</label>
                            <input
                                type='text'
                                value={deadlineNotes}
                                onChange={(e) => setDeadlineNotes(e.target.value)}
                            />
                        </div>

                        <div className='form__buttons'>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form4;