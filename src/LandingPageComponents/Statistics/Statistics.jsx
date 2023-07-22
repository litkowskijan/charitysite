import React from 'react';

const Statistics = () => {
    return (
        <div className='statistics__section section'>
            <div className='statistics__container container'>
                <div className='statistics__box'>
                    <span className='statistics__number'>10</span>
                    <span className='statistics__title'>ODDANYCH WORKÓW</span>
                    <span className='statistics__lead'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                </div>
                <div className='statistics__box'>
                    <span className='statistics__number'>5</span>
                    <span className='statistics__title'>WSPARTYCH ORGANIZACJI</span>
                    <span className='statistics__lead'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                </div>
                <div className='statistics__box'>
                    <span className='statistics__number'>7</span>
                    <span className='statistics__title'>ZORGANIZOWANYCH ZBIÓREK</span>
                    <span className='statistics__lead'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                </div>
            </div>
        </div>
    );
}

export default Statistics;