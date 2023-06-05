import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalContent.module.scss';
import Button from '../../Buttons/Button/Button';

const ModalContent = ({ children, onClose }) => (
    <div className={styles.ModalContent} data-testid="ModalContent">
        <div className={styles.ModalContent_inner}>
            {children}
            <div className={styles.ModalContent_close}>
                <Button onClick={onClose}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    </div>
);

ModalContent.propTypes = {
    onClose: PropTypes.func,
};

ModalContent.defaultProps = {};

export default ModalContent;
