import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMainForm } from '../../formcontext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Form2 = () => {

    const options = [1, 2, 3, 4, 5];

    const { handleSubmit, formState: { errors }, register, setValue } = useForm();
    const { amount, setAmount } = useMainForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log('Wybrano opcję:', data.option);
        setAmount(data.option);
        navigate('/step3');
    };

    const handleSelectChange = (e) => {
        setValue('option', e.target.value);
    };

    useEffect(() => {
        register('option', { required: 'Wybierz opcję' });
        setValue('option', amount);
    }, [register, setValue, amount]);
    
    return (
        <div className='form__section section'>
            <div className='form__container container'>
                <span className="form__step">Krok 2/4</span>
                <span className='form__title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
                <div className='form__content'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select
                            name='option'
                            onChange={handleSelectChange}
                            {...register('option', { required: 'Wybierz opcję' })}
                            defaultValue={amount}
                        >
                            <option value=''>-- Wybierz --</option>
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        
                        {errors.option && <p className='error'>{errors.option.message}</p>}

                        <div className='form__buttons'>
                            <RouterLink to='/step1'>Wstecz</RouterLink>
                            <button type='submit'>Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    );
}

export default Form2;