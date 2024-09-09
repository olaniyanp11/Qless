import React from 'react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Upload = () => {
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
                        Upload Product
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                Product name
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
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Decription
                            </label>
                            <div className="mt-2">
                                <fieldset 
                                    id="matricNumber"
                                    name="fullname"
                                    type="text"
                                    required
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    autoComplete="matricNumber"
                                    className="block h-10 w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#017901] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Decription
                            </label>
                            <div className="mt-2">
                                <input 
                                    id="matricNumber"
                                    name="fullname"
                                    type="file"
                                    required
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    autoComplete="matricNumber"
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
    )
}
