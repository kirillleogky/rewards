import React from 'react';

import './styles.scss';


const Label = ({ labelText, children }) => {
    return <label className="label">
        {labelText}
        {children}
    </label>;
};

export default Label;
