import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, onClick }) => {
    return (
        <button
            className={styles.Button}
            data-testid="Button"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;
