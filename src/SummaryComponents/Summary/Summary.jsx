import React from 'react';
import { useMainForm } from '../../formcontext';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
    const {
        things,
        amount,
        location,
        helpTarget,
        organization,
        addressStreet,
        addressCity,
        addressPostcode,
        addressPhoneNumber,
        deadlineDate,
        deadlineTime,
        deadlineNotes
    } = useMainForm();
    const navigate = useNavigate();

    const formsRef = collection(db, 'forms');

    const handleSend = () => {
        addDoc(formsRef, {
            things,
            amount,
            location,
            helpTarget,
            organization,
            addressStreet,
            addressCity,
            addressPostcode,
            addressPhoneNumber,
            deadlineDate,
            deadlineTime,
            deadlineNotes
        })
        .then(() => {
            console.log('Wysłano formularz pomyślnie');
        })
        .catch((error) => {
            console.error('Błąd podczas wysyłania danych do Firestore:', error);
        })
        .finally(navigate('/'))
    };

    return (
        <div className='summary__section section'>
            <div className='summary__container container'>
                <div className='summary__title'>Podsumowanie twojej darowizny</div>
                <div className='summary__whatugive'>Oddajesz: {amount} worki, {things}, {helpTarget}</div>
                <div className='summary__location'>dla lokalizacji: {location}</div>
                <div className='summary__details'>
                    <div className='summary__address__box'>
                        <div className="summary__address__title">Adres odbioru:</div>
                        <div className="summary__address__street">Ulica: {addressStreet}</div>
                        <div className="summary__address__city">Miasto: {addressCity}</div>
                        <div className="summary__address__postcode">Kod pocztowy: {addressPostcode}</div>
                        <div className="summary__address__number">Numer telefonu: {addressPhoneNumber}</div>
                    </div>
                    <div className='summary__pickup__box'>
                        <div className="summary__pickup__title">Termin odbioru:</div>
                        <div className="summary__pickup__date">Data: {deadlineDate}</div>
                        <div className='summary__pickup__time'>Godzina: {deadlineTime}</div>
                        <div className='summary__pickup__notes'>Uwagi dla kuriera: {deadlineNotes}</div>
                    </div>
                </div>
                <button onClick={handleSend}>Potwierdzam</button>
            </div>
        </div>
    );
};

export default Summary;