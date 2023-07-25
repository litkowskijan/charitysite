import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({children}) => {

    const [things, setThings] = useState('');

    const [amount, setAmount] = useState('');

    const [location, setLocation] = useState('');
    const [helpTarget, setHelpTarget] = useState('');
    const [organization, setOrganization] = useState('');

    const [addressStreet, setAddressStreet] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [addressPostcode, setAddressPostcode] = useState('');
    const [addressPhoneNumber, setAddressPhoneNumber] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [deadlineTime, setDeadlineTime] = useState('');
    const [deadlineNotes, setDeadlineNotes] = useState('');

    return (
        <FormContext.Provider 
        value={{
            things, setThings,
            amount, setAmount,
            location, setLocation,
            helpTarget, setHelpTarget,
            organization, setOrganization,
            addressStreet, setAddressStreet,
            addressCity, setAddressCity,
            addressPostcode, setAddressPostcode,
            addressPhoneNumber, setAddressPhoneNumber,
            deadlineDate, setDeadlineDate,
            deadlineTime, setDeadlineTime,
            deadlineNotes, setDeadlineNotes
        }}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider };
export const useMainForm = () => useContext(FormContext);