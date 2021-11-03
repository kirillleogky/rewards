import React from 'react';

import './styles.scss';

const Textarea = ({ name, rows, placeholder, onChange, value}) => {
    return               <textarea name={name}
                         rows={rows}
                         placeholder={placeholder}
                         onChange={onChange}
                         value={value}
                         className="textarea"/>;
};

export default Textarea;
