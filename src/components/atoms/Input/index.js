import React from 'react';

import './styles.scss';

const Input = ({ type, name, placeholder, onChange, value }) => {
    return <input type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={onChange}
                  value={value}
                  className="input"/>;
};

export default Input;
