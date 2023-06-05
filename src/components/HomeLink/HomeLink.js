import React from 'react';
import styles from './HomeLink.module.scss';
import NavigateButton from '../layout/Buttons/NavigateButton/NavigateButton';

// Intentional programmatic navigation for skill purposes
const HomeLink = () => {
    return (
        <div className={styles.HomeLink} data-testid="HomeLink">
            <NavigateButton label="Know more about me" link="/">
                <i className="fa fa-home"></i>
            </NavigateButton>
        </div>
    );
};

HomeLink.defaultProps = {};

export default HomeLink;
