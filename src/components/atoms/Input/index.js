import React from 'react';

import './styles.scss';

const Input = ({ type, name, placeholder, onChange, value, onClick }) => {
    return <input type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={onChange}
                  onClick={onClick}
                  value={value}
                  className="input"/>;
};

export default Input;
