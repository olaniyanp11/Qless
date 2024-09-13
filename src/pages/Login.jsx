import React, { useEffect } from 'react'
import { Nav } from '../components/Nav.jsx';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setToken } from '../redux/userSlice.js';
import { useAlert } from '../components/AlertContext.jsx';



export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isOrg, setisOrg] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { showAlert } = useAlert()
    const apiUrl = import.meta.env.VITE_API_URL
    const { user, isLoggedIn, statusp } = useSelector((state) => state.user);
    const [error, setError] = useState();

    const handleClickErr = (err) => {
        showAlert('Error: ' + err, 'error'); // Improved error message
    };
    useEffect(() => {
        // Check if user is logged in or token exists in localStorage
        const token = localStorage.getItem('userToken');

        if (isLoggedIn || token) {
            showAlert('user already logged in', 'success')
            // If the user is logged in or token exists, navigate to the dashboard
            if (statusp === 'org')
                navigate('/orgdashboard');
            else if (statusp === "user")
                navigate('/dashboard');
        }
    }, [isLoggedIn, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/user/login`, { email, password, isOrg });
            if (response.status === 200) {
                console.log(response.data);
                dispatch(setToken(response.data.token)); // Dispatch action to set token
                showAlert('Login Successfull ', 'success')
                console.log(response.data.statusp);

                if (response.data.statusp === "org") {
                    navigate('/orgdashboard');
                }// Redirect after successful login
                else if (response.data.statusp === "user") {
                    navigate('/dashboard'); // Redirect after successful login

                }
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError(error.response?.data?.message || 'Signup failed. Please try again.');
            handleClickErr(error.response?.data?.message || 'Error occurred');
        }
    };
    return (
        <>
            <Nav />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} method="get" className="space-y-6">
                        <div>
                            <label htmlFor="email" id='email' className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" id='password' className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2ac42a] sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-gray-500 hover:text-[#017901]">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="isOrg" className="flex mr-5 text-sm  font-bold leading-6 text-[#017901]">
                                Login as Organization
                            </label>
                            <div className="mt-2">
                                <input
                                    id="isOrd"
                                    name="isOrg"
                                    value={isOrg}
                                    onChange={(e) => setisOrg(e.target.checked)}
                                    type='checkbox'
                                    className='bg-[#017901] ring-[#017901]'
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#017901] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#31d331] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/signup" className="font-semibold leading-6 text-[#017901] hover:[#017901]text-indigo-500">
                            Signup now
                        </Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
