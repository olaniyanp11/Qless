import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Nav } from '../components/Nav';
import { useAlert } from '../components/AlertContext';
import { useSelector } from 'react-redux';

export const Allproducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { showAlert } = useAlert();
    const { user, isLoggedIn } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleAlert = (msg, status) => {
        showAlert(msg, status);
    };

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        console.log("Token:", token);

        if (!isLoggedIn || !token) {
            navigate('/login');
            return; // Exit early if not logged in or no token
        } else if (user.isOrg) {
            navigate('/orgdashboard');
            return; // Exit early if user is an organization
        }

        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${apiUrl}/products/all`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    timeout: 5000 // Timeout set to 5000ms (5 seconds)
                });

                console.log("Fetched products:", response.data); // Log response data
                setProducts(Array.isArray(response.data.products) ? response.data.products : []); // Ensure it's an array
                handleAlert("Products fetched successfully", 'success');
            } catch (error) {
                console.error("Error fetching products:", error); // Log the error
                setError(error.message);
                handleAlert(error.message, 'error');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, [isLoggedIn, navigate, user.isOrg]);

    if (loading) return <div>Loading...</div>; // Show loading message
    if (error) return <div>Error: {error}</div>; // Show error message

    return (
        <>
            <Nav />
            <ul className='flex flex-wrap px-2 sm:px-7 py-7 gap-10 justify-center'>
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                        <li key={product._id} className='w-[250px] mb-10 relative h-fit'>
                            <div className='sm:w-[250px] w-full h-[300px] relative hover:border-1px border-[#017901]'>
                                <img src={`${apiUrl}/uploads/${product.imageUrl}`} alt={product.name} className='w-full h-full object-cover hover:scale-110 transition-all transition-3s' />
                                {product.imagUrl}
                            </div>
                            <h3 className='font-bold text-neutral-500'>{product.name}</h3>
                            <BsStarFill className='text-[#FFD700]' />
                            <div className='h-[100px] overflow-hidden'>
                                <small className='text-neutral-500'>{product.description}...</small>
                            </div>
                            <Link to={`/singleProduct?id=${product._id}`} className='border-solid bg-[#017901] text-center p-3 text-white mt-2 rounded-lg border-[#017901] block'>Buy Now</Link>
                        </li>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </ul>
            <Footer />
        </>
    );
};
