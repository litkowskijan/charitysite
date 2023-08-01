import React from 'react';
import { useForm } from 'react-hook-form';
import { useMainForm } from '../../formcontext'
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const options = [
      { value: 'ubrania, które nadają się do ponownego użycia' },
      { value: 'ubrania, do wyrzucenia' },
      { value: 'zabawki' },
      { value: 'książki' },
      { value: 'Inne' }
    ];

    const { handleSubmit, formState: { errors }, register, setValue } = useForm();
    const { setThings } = useMainForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
      console.log('Wybrano opcję:', data.options);
      setThings(data.options);
      navigate('/step2')
    };

    const handleRadioChange = (e) => {
      const selectedOption = e.target.value;
      setValue('options', selectedOption);
    };

    return (
        <div className='form__section section'>
            <div className='form__container container'>
                <span className="form__step">Krok 1/4</span>
                <span className='form__title'>Zaznacz co chcesz oddać:</span>
                <div className='form__content'>
                    <form className='form__step1' onSubmit={handleSubmit(onSubmit)}>
                        {options.map((option) => (
                            <label className='form__step1__label' key={option.value}>
                                <input className='form__step1__input'
                                    type='radio'
                                    name='options'
                                    value={option.value}
                                    onChange={handleRadioChange}
                                    {...register('options', { required: 'Wybierz opcję' })}
                                />
                                    {option.value}
                            </label>
                        ))}

                        {errors.options && <p className='form__step1__error'>{errors.options.message}</p>}
                    
                        <div className='form__buttons'>
                            <button className='form__step1__submit' type='submit'>Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    );
}

export default Form;