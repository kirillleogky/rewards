import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Button = ({ children, closeModal, className, isClassNameActive }) => {
    const classProps = classnames(
        className,
        {
            [`${className}--active`]: isClassNameActive
        }
    );

    return <button className={classProps} onClick={closeModal}>
        {children}
    </button>;
};

export default Button;
