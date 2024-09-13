import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../components/AlertContext';

export const SingleProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false); // Add state for processing
    const apiUrl = import.meta.env.VITE_API_URL; // Your API base URL
    const query = new URLSearchParams(location.search);
    const productId = query.get('id');
    const { user, isLoggedIn } = useSelector((state) => state.user); // Move useSelector outside of useEffect
    const [email, setEmail] = useState(user?.email || ''); // Initialize email
    const { showAlert } = useAlert(); // Use alert context

    useEffect(() => {
        const token = localStorage.getItem('userToken');

        const fetchProduct = async () => {
            if (!isLoggedIn || !token) {
                navigate('/login');
                return;
            } else if (user.isOrg) {
                navigate('/orgdashboard');
                return;
            }

            setEmail(user.email); // Ensure email is updated
            try {
                const response = await axios.get(`${apiUrl}/products/getOne/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    timeout: 5000, // Timeout set to 5000ms (5 seconds)
                });
                console.log(response.data);
                setProduct(response.data.product);

                setEmail(response.data.user.user.email)

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId, isLoggedIn, user, navigate, apiUrl]);

    const handleBuyNow = async (e) => {
        e.preventDefault();
        if (!user || !email) {
            showAlert('User email not found. Please log in again.', 'error');
            return;
        }

        setIsProcessing(true); // Set processing to true when starting the payment initialization

        try {
            const token = localStorage.getItem('userToken');
            const params = new URLSearchParams({
                productId: product._id,
                email: email, // Pass email state value
            }).toString();

            const response = await axios.post(
                `${apiUrl}/user/initialize-payment?${params}`, // Send as query params
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    timeout: 5000, // Timeout set to 5000ms (5 seconds)
                }
            );
            console.log(response.data);
            if (response.data.authorizationUrl) {
                window.location.href = response.data.authorizationUrl; // Redirect to payment URL
            } else {
                throw new Error('Failed to get payment URL');
            }
        } catch (error) {
            console.error('Payment initialization failed:', error);
            showAlert('An error occurred while initializing the payment. Please try again.', 'error'); // Show error via alert context
        } finally {
            setIsProcessing(false); // Set processing to false after the request completes
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Nav />
            <div className='flex justify-center pb-10 pt-10'>
                <div className='w-1/2 text-neutral-500'>
                    <div className='w-full flex justify-center h-[300px] mb-5'>
                        <img
                            src={`${apiUrl}/uploads/${product.imageUrl}`}
                            className='w-full object-cover'
                            alt={product.name}
                        />
                    </div>
                    <h2 className='text-3xl text-start font-bold mb-2 text-neutral-600'>
                        {product.name}
                    </h2>
                    <article>{product.description}</article>
                    {/* Form to submit productId and email */}
                    <form onSubmit={handleBuyNow}>
                        <input
                            type='hidden'
                            value={email}
                            readOnly
                            className='block w-full p-2 border border-gray-300 rounded'
                            required
                        />
                        <button
                            type='submit'
                            className='border-solid bg-[#017901] text-center p-3 text-white mt-2 rounded-lg border-[#017901] block'
                            disabled={isProcessing} // Disable button while processing
                        >
                            {isProcessing ? 'Loading...' : 'Buy Now'} {/* Change button text */}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
