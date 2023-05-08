import React from 'react';
import styles from './HomeLink.module.scss';
import { useNavigate } from 'react-router-dom';

// Intentional programmatic navigation for skill purposes
const HomeLink = () => {
    const navigate = useNavigate();
    const onLinkClick = () => {
        navigate('/');
    };
    return (
        <div className={styles.HomeLink} data-testid="HomeLink">
            <button className={styles.HomeLink_button} onClick={onLinkClick}>
                <i className="fa fa-home"></i>
            </button>
        </div>
    );
};

HomeLink.defaultProps = {};

export default HomeLink;
