import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ skillLevel, label }) => {
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgressWidth(skillLevel);
        }, 500); // Delay execution to allow the animation to be correctly visible

        return () => clearTimeout(timer);
    }, [skillLevel]);

    return (
        <div className={styles.ProgressBar} data-testid="ProgressBar">
            <span className={styles.ProgressBar_label}>{label}</span>
            <div className={styles.ProgressBar_bar}>
                <div
                    className={styles.ProgressBar_bar_progress}
                    style={{ width: `${progressWidth}%` }}
                ></div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    skillLevel: PropTypes.number,
    label: PropTypes.string,
};

ProgressBar.defaultProps = {
    skillLevel: 0,
};

export default ProgressBar;
