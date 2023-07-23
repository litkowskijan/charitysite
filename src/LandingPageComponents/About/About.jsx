import React from 'react';
import People from '../../Assets/People.jpg'
import Decoration from '../../Assets/Decoration.svg'
import Signature from '../../Assets/Signature.svg'

const About = () => {
    return (
        <div className='about__section section' id='about'>
            <div className='about__box'>
                <span className='about__title'>O nas</span>
                <img className='about__decoration' src={Decoration} alt='decoration'></img>
                <p className='about__lead'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className='about__signature__box'>
                    <img className='about__signature' src={Signature} alt='signature'></img>
                </div>
            </div>
            <img className='about__people' src={People} alt='people'></img>
        </div>
    );
}

export default About;