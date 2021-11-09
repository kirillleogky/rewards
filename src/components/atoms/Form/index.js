import React, { useEffect, useState } from 'react';

import './styles.scss';


const Form = ({ children, initialValues, onSubmit, getIsFormValid }) => {
    const [formValues, setFormValues] = useState(initialValues);

    useEffect(() => {
      getIsFormValid(formValues);
    }, [formValues, getIsFormValid]);

    const submit = event => {
        onSubmit(formValues);
        event.preventDefault();
    };

    const saveFieldValue = event => {
      setFormValues(prevFormValues => ({
        ...prevFormValues,
        [event.target.name]: event.target.value
      }));
    };

    return <form onSubmit={submit} className="form">
        {children(saveFieldValue, formValues)}
    </form>;
};

export default Form;
