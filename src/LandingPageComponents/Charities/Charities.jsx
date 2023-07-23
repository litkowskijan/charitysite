import React, { useState } from 'react';
import classnames from 'classnames';
import Decoration from '../../Assets/Decoration.svg';
import 'firebase/compat/firestore';
import { db } from '../../firebase';
import { collection, doc } from 'firebase/firestore';
import { useCollection, useDocumentData } from 'react-firebase-hooks/firestore';

const itemsPerPage = 3;

const Charities = () => {

    const [leadPath, setLeadPath] = useState('charities/charities1');
    const [charityPath, setCharityPath] = useState('charities/charities1/1')
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedButton, setSelectedButton] = useState('fundacje')

    const handleFirstButton = () => {
        setLeadPath('charities/charities1')
        setCharityPath('charities/charities1/1')
        setCurrentPage(1)
        setSelectedButton('fundacje')
    }

    const handleSecondButton = () => {
        setLeadPath('charities/charities2')
        setCharityPath('charities/charities2/2')
        setCurrentPage(1)
        setSelectedButton('organizacje')
    }

    const handleThirdButton = () => {
        setLeadPath('charities/charities3')
        setCharityPath('charities/charities3/3')
        setCurrentPage(1)
        setSelectedButton('lokalne')
    }

    const [charityValue] = useCollection(
      collection(db, charityPath)
    );

    const leadDocRef = doc(db, leadPath);
    const [leadData] = useDocumentData(leadDocRef);
    const leadText = leadData?.lead || '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCharityValue = charityValue && charityValue.docs.slice(startIndex, endIndex);

    return (
        <div className='charities__section section' id='charities'>
            <div className='charities__container container'>
                <h2 className='charities__title'>Komu pomagamy?</h2>
                <img className='charities__decoration' src={Decoration} alt='decoration'></img>
                <div className='charities__btns'>
                    <button
                        className={classnames('charities__btn', {
                            charities__btn__selected: selectedButton === 'fundacje'
                        })}
                        onClick={handleFirstButton}
                    >
                        Fundacjom
                    </button>
                    <button
                        className={classnames('charities__btn', {
                            charities__btn__selected: selectedButton === 'organizacje'
                        })}
                        onClick={handleSecondButton}
                    >
                        Organizacjom<br />pozarządowym
                    </button>
                    <button
                        className={classnames('charities__btn', {
                            charities__btn__selected: selectedButton === 'lokalne'
                        })}
                        onClick={handleThirdButton}
                    >
                        Lokalnym<br />zbiórkom
                    </button>
                </div>
                {leadData && <p className='charities__main__lead'>{leadText}</p>}
                <div className='charities__boxes'>
                    {paginatedCharityValue && (
                        <>
                            {paginatedCharityValue.map((item) => (
                                <div key={item.id} className='charity__box'>
                                    <div className='charity__title'>{item.data().title}</div>
                                    <div className='charity__lead__row'>
                                        <div className='charity__lead1'>{item.data().lead1}</div>
                                        <div className='charity__lead2'>{item.data().lead2}</div>
                                    </div>    
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <div className='charities__page__btns'>
                    {[...Array(Math.ceil((charityValue?.docs.length || 0) / itemsPerPage)).keys()].map((pageNumber) => (
                        <div
                            key={pageNumber + 1}
                            className={classnames('charities__page__btn', {
                              charities__active__btn: currentPage === pageNumber + 1,
                            })}
                            onClick={() => setCurrentPage(pageNumber + 1)}
                        >
                            {pageNumber + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Charities;