import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export const OrgSignup = () => {
    return (
        <>
            <Nav/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Signup As an Organization
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                               Organization name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="organizationName"
                                    name="organizationName"
                                    type="text"
                                    required
                                    placeholder='organizationName'
                                    autoComplete="organizationName"
                                    className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Organization Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="organizationEmail"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
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
                                    required
                                    min={5}
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
                        <Link to="/signup" className="font-semibold leading-6 text-[#017901] hover:[#017901]text-indigo-500">
                            Signup as an Individual
                        </Link>
                        <br />
                        already a member?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-[#017901] hover:[#017901]text-indigo-500">
                            login
                        </Link>

                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}
