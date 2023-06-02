import React from 'react';
import styles from './HomeLink.module.scss';
import Button from '../Button/Button.lazy';

// Intentional programmatic navigation for skill purposes
const HomeLink = () => {
    return (
        <div className={styles.HomeLink} data-testid="HomeLink">
            <Button label="Know more about me" link="/">
                <i className="fa fa-home"></i>
            </Button>
        </div>
    );
};

HomeLink.defaultProps = {};

export default HomeLink;
