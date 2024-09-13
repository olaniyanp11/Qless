import React, { createContext, useContext, useState } from 'react';
import './Alert.css';
// Create the context
const AlertContext = createContext();

// Create a provider component
export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type = 'info') => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
    };

    return (
        <AlertContext.Provider value={{ alert, showAlert }}>
            {children}
            {alert && (
                <div className={`alert ${alert.type}`}>
                    {alert.message}
                </div>
            )}
        </AlertContext.Provider>
    );
};

// Custom hook to use the alert context
export const useAlert = () => useContext(AlertContext);
