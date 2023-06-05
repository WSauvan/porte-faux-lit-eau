import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const NavigateButton = ({ children, link }) => {
    const navigate = useNavigate();
    const onLinkClick = () => {
        navigate(link);
    };

    return (
        <div data-testid="NavigateButton">
            <Button data-testid="NavigateButton" onClick={onLinkClick}>
                {children}
            </Button>
        </div>
    );
};

NavigateButton.propTypes = {
    link: PropTypes.string.isRequired,
};

NavigateButton.defaultProps = {};

export default NavigateButton;
