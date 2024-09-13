import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from '../../components/Nav';
import { CgClose } from 'react-icons/cg';
import Backgroud from '../../assets/eee.png'
import { Link, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { GiExitDoor } from 'react-icons/gi';
import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { useAlert } from '../../components/AlertContext';
import { MdUpdate } from 'react-icons/md';
import { useEffect } from 'react';


export const UserHome = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { showAlert } = useAlert();
    const navigate = useNavigate()
    // Access state using useSelector
    const { user, isLoggedIn } = useSelector((state) => state.user);
    useEffect(() => {
        // Check if user is logged in or token exists in localStorage
        const token = localStorage.getItem('userToken');

        if (!isLoggedIn || !token) {
            // If the user is not logged in or token exists, navigate to login
            navigate('/login');
        }
        else if (user.isOrg)
            navigate('/orgdashboard');
    }, [isLoggedIn, navigate]);

    return (
        <>
            <Nav />
            <div className='flex relative'>
                <div className={` ${isOpen ? 'md:w-1/4 w-[80%] absolute top-0' : 'w-[50px] md:w-[50px] relative'} bg-[#017901] flex flex-col h-[90vh] rounded-tr-md rounded-br-md overflow-hidden pt-10 items-center  transition-all`}>
                    <img src={Backgroud} className={`absolute top-0 h-full opacity-40 ${isOpen ? 'flex' : 'hidden'}`} alt="" />
                    <CgClose className={`text-white text-[20px] absolute z-10 top-4 right-4 ${isOpen ? 'flex' : 'hidden'}`} onClick={() => { setIsOpen(false) }} />
                    <BiMenu className={`text-white text-[20px] absolute z-10 top-4 right-4 ${isOpen ? 'hidden' : 'flex'}`} onClick={() => { setIsOpen(true) }} />

                    <h2 className={`font-bold font-sans leading-[1] text-white text-[30px] ${isOpen ? 'flex' : 'hidden'}`}>{user.user.name}</h2>
                    <p className={`font-sans text-white ${isOpen ? 'flex' : 'hidden'}`}>{user.user.email}</p> {/* Display user's email from state */}
                    <div className='w-full flex flex-col items-center gap-7 mt-7 z-10'>
                        <Link className={`text-[#017901] bg-[#ffffff] w-[85%] hover:bg-[#017901]   hover:text-white   ${isOpen ? 'flex' : 'hidden'} transition-all mt-2 p-2 rounded-[30px] px-5 flex justify-between  flex-row-reverse `}><MdUpdate className='text-[#017901] mr-4' /> Edit Profile</Link>
                        <Link to='/allProduct' className={`text-[#017901] bg-[#ffffff] w-[85%] hover:bg-[#017901] hover:text-white ${isOpen ? 'flex' : 'hidden'} transition-all mt-2 p-2 rounded-[30px] px-5 flex justify-between flex-row-reverse`}><MdUpdate className='text-[#017901] mr-4' /> View All Products</Link>
                        <Link className={`text-[#017901] bg-[#ffffff] w-[85%] hover:bg-[#017901]   hover:text-white   ${isOpen ? 'flex' : 'hidden'} transition-all mt-2 p-2 rounded-[30px] px-5 flex justify-between flex-row-reverse`}><MdUpdate className='text-[#017901] mr-4' /> Check Transactions History</Link>
                        <Link className={`text-[#017901] bg-[#ffffff] w-[85%] hover:bg-[#017901]   hover:text-white  ${isOpen ? 'flex' : 'hidden'} transition-all mt-2 p-2 rounded-[30px] px-5 flex justify-between flex-row-reverse`}><MdUpdate className='text-[#017901] mr-4' /> delete Profile</Link>
                        <Link className={`text-[#017901] bg-[#ffffff] w-[85%] hover:bg-[#017901]   hover:text-white ${isOpen ? 'flex' : 'hidden'} transition-all mt-2 p-2 rounded-[30px] px-5 flex justify-between flex-row-reverse`}><MdUpdate className='text-[#017901] mr-4' /> Edit Profile</Link>
                    </div>
                    <div className={`absolute bottom-2 right-5 flex items-center text-white ${isOpen ? 'flex' : 'hidden'}`}>
                        <GiExitDoor className='text-[30px]' />
                        <Link to='/logout'> Logout</Link>
                    </div>
                </div>
                <div className='w-full h-[90vh] p-10'>
                    <div className='flex justify-center flex-wrap md:justify-between gap-5'>
                        <div className='w-full sm:w-[250px] bg-[#e9b31f] h-[200px] flex rounded-xl shadow-md shadow-[#31280e96] items-center flex-col justify-center'>
                            <h2 className='text-[40px] font-bold text-[#ffffff]'>{user.user.products}</h2> {/* Display product count from state or API */}
                            <p className='text-[#ffffff] font-bold'> Products</p>
                        </div>
                        <div className='w-full sm:w-[250px] bg-white h-[200px] flex rounded-xl shadow-xl items-center flex-col justify-center'>
                            <h2 className='text-[40px] font-bold text-[#017901]'>{}</h2> {/* Display purchase count from state or API */}
                            <p className='text-[#017901] font-bold'> Purchases</p>
                        </div>
                        <div className='w-full sm:w-[250px] bg-[#017901] h-[200px] flex rounded-xl shadow-md shadow-[#112111c3] items-center flex-col justify-center'>
                            <h2 className='text-[40px] font-bold text-[#ffffff]'>{}</h2> {/* Display transaction count from state or API */}
                            <p className='text-[#ffffff] font-bold'> Transactions </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
