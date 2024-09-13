import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export const SuccessPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const reference = query.get('reference');
    const productId = query.get('productId');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let toke = localStorage.getItem('userToken')

        const fetchData = async () => {
            try {
                const response = await axios.get('/api/refresh', {
                    params: { reference, productId }, headers: {
                        'Authorization': `Bearer ${toke}`,
                        'Content-Type': 'application/json'
                    },
                    timeout: 5000 // Timeout set to 5000ms (5 seconds)
                });

                setMessage(response.data.message || 'Payment successful!');

                // Update local storage or state as needed
                const { token } = response.data; // Expecting token in response
                if (token) {
                    localStorage.setItem('userToken', token);
                }
            } catch (error) {
                setMessage('Payment failed or missing information.');
            } finally {
                setLoading(false);
            }
        };

        if (reference && productId) {
            fetchData();
        } else {
            setMessage('Payment failed or missing information.');
            setLoading(false);
        }
    }, [reference, productId]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <h1 className='text-4xl font-bold text-green-600 mb-4'>Payment Success</h1>
            <p className='text-lg text-gray-700'>{message}</p>
            <a href="/login" className='mt-4 px-4 py-2 bg-green-600 text-white rounded-lg'>
                Go to Dashboard
            </a>
        </div>
    );
};
