import React from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';
import Button from '../../../Button/Button';

const ModalButton = ({ children }) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <div data-testid="ModalButton">
                <Button onClick={() => setShowModal(true)}>
                    <i className="fa fa-question-circle" aria-hidden="true"></i>
                </Button>
            </div>
            {showModal &&
                createPortal(
                    <ModalContent onClose={() => setShowModal(false)}>
                        {children}
                    </ModalContent>,
                    document.body
                )}
        </>
    );
};

ModalButton.propTypes = {};

ModalButton.defaultProps = {};

export default ModalButton;
