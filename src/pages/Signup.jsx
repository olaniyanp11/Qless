import React from 'react'
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {

        e.preventDefault()
        let response = await axios.post('http://localhost:3000/user/signup', { fullname, email, password })
        if (response.status === 200) {
            navigate('/login')
        }
    }
    return (
        <>
            <Nav />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Signup As an Individual
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                full name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="matricNumber"
                                    name="fullname"
                                    type="text"
                                    required
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    autoComplete="matricNumber"
                                    className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-[#017901] hover:text-[#017901]">
                                        Forgot password?
                                    </a>
                                </div>
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
                        <Link to="/orgsignup" className="font-semibold leading-6 text-[#017901] hover:[#017901]text-indigo-500">
                            Signup as an organization
                        </Link>
                        <br />
                        already a member?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-[#017901] hover:[#017901]text-indigo-500">
                            login
                        </Link>

                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
