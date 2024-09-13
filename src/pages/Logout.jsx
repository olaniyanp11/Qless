import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearToken } from '../redux/userSlice'; // Import your clearToken action
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Clear Redux state and localStorage on component mount
        dispatch(clearToken());
        localStorage.removeItem('userToken'); // Remove token from localStorage

        // Redirect to login page
        navigate('/login');
    }, [dispatch, navigate]);

    return (
        <div>Logging out...</div>
    );
};
