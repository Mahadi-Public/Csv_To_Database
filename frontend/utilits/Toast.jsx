import React, { useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';

const SuccessToast = ({ show, onClose, message, duration }) => {
    useEffect(() => {
        let timeoutId;
        if (show) {
            timeoutId = setTimeout(() => {
                onClose(); // Close the toast after the specified duration
            }, duration);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [show, onClose, duration]);

    return (
        <Toast show={show} onClose={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>
            {/* <Toast.Header>
                <strong className="me-auto">Success!</strong>
            </Toast.Header> */}
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
};

export default SuccessToast;
