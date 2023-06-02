import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, link }) => {
    const navigate = useNavigate();
    const onLinkClick = () => {
        navigate(link);
    };

    return (
        <button
            className={styles.Button}
            data-testid="Button"
            onClick={onLinkClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    link: PropTypes.string.isRequired,
};

export default Button;
