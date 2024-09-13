import React, { useState } from 'react';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { useAlert } from '../../components/AlertContext';

export const Upload = () => {
    const [name, setFullname] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(1);
    const [image, setImageFile] = useState(null); // To hold the image file
    const navigate = useNavigate();
    const { user, isLoggedIn } = useSelector((state) => state.user);
    const [organizationId, setOrganizationId] = useState(user.userId);
    const { showAlert } = useAlert();
    const [error, setError] = useState('');

    const handleClickErr = (err) => {
        showAlert('Error: ' + err, 'error'); // Improved error message
    };

    useEffect(() => {
        const token = localStorage.getItem('userToken');

        if (!isLoggedIn || !token) {
            navigate('/login');
        }
        else if (!user.user.isOrg)
            navigate('/login')
    }, [isLoggedIn, navigate]);

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]); // Capture the selected file
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to handle file upload
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('organizationId', organizationId);
        formData.append('image', image); // Append the image file

        try {
            const token = localStorage.getItem('userToken');

            const apiUrl = import.meta.env.VITE_API_URL
            let response = await axios.post(`${apiUrl}/org/addproduct`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response.status === 200) {
                showAlert('Product uploaded successfully', 'success');
                localStorage.setItem('userToken', response.data.token);
                navigate('/orgdashboard'); // Redirect on success
            }

        } catch (error) {
            setError(error.response?.data?.message || 'Failed to upload product.');
            handleClickErr(error.response?.data?.message || 'Error occurred');
            console.error('Error uploading product:', error);
        }
    };

    return (
        <>
            <Nav />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Upload Product
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="product-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="product-name"
                                    name="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setFullname(e.target.value)}
                                    autoComplete="product-name"
                                    className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="product-description" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Description
                            </label>
                            <div className="mt-2">
                                <input
                                    id="product-description"
                                    name="description"
                                    type="text"
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    autoComplete="product-description"
                                    className="block h-10 w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="product-price" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Price
                            </label>
                            <div className="mt-2">
                                <input
                                    id="product-price"
                                    name="price"
                                    type="number"
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    autoComplete="product-price"
                                    className="block h-10 w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="product-image" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Image
                            </label>
                            <div className="mt-2">
                                <input
                                    id="product-image"
                                    name="image"
                                    type="file"
                                    required
                                    onChange={handleFileChange} // Update imageFile state
                                    className="block h-10 w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#017901] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#31d331] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Upload product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
