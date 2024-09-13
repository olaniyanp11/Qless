import React from 'react';
import './Alert.css';

const AlertComponent = ({ alert }) => {
    if (!alert) return null;

    return (
        <>
            <div className={`alert ${alert.type}`}>
                {alert.message}
            </div>
        </>
    );
};

export default AlertComponent;
