import React from 'react';
import classnames from 'classnames';

import './styles.scss';


const Button = ({ children, onClick, className, isClassNameActive }) => {
    const classProps = classnames(
        className,
        {
            [`${className}--active`]: isClassNameActive
        }
    );

    return <button className={classProps} onClick={onClick}>
        {children}
    </button>;
};

export default Button;
