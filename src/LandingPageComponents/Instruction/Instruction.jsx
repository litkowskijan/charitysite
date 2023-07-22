import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Decoration from '../../Assets/Decoration.svg'
import Step1 from '../../Assets/Icon-1.svg'
import Step2 from '../../Assets/Icon-2.svg'
import Step3 from '../../Assets/Icon-3.svg'
import Step4 from '../../Assets/Icon-4.svg'

const Instruction = () => {
    return (
        <>
            <div className='instruction__section section'>
                <div className='instruction__container container'>
                    <h2 className='instruction__title'>Wystarczą 4 proste kroki</h2>
                    <img className='instruction__decoration' src={Decoration} alt='decoration'></img>
                </div>
            </div>
            <div className='instruction__section2 section'>
                <div className='instruction__box container'>
                    <div className='instruction__step'>
                        <img className='instruction__svg' src={Step1} alt='step1'></img>
                        <span className='instruction__title'>Wybierz rzeczy</span>
                        <div className='instruction__line'></div>
                        <p className='instruction__lead'>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='instruction__step'>
                        <img className='instruction__svg' src={Step2} alt='step2'></img>
                        <span className='instruction__title'>Spakuj je</span>
                        <div className='instruction__line'></div>
                        <p className='instruction__lead'>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='instruction__step'>
                        <img className='instruction__svg' src={Step3} alt='step3'></img>
                        <span className='instruction__title'>Zdecyduj komu chcesz pomóc</span>
                        <div className='instruction__line'></div>
                        <p className='instruction__lead'>wybierz zaufane miejsce</p>
                    </div>
                    <div className='instruction__step'>
                        <img className='instruction__svg' src={Step4} alt='step4'></img>
                        <span className='instruction__title'>Zamów kuriera</span>
                        <div className='instruction__line'></div>
                        <p className='instruction__lead'>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className='instruction__section3 section'>
                <div className='instruction__container container'>
                    <RouterLink to='/' className='instruction__button'>ODDAJ<br/>RZECZY</RouterLink>
                </div>
            </div>
        </>
        
    );
}

export default Instruction;