import React from 'react'
import { Nav } from '../../components/Nav'
import { CgClose } from 'react-icons/cg'
import Profile from "../../assets/profile.jpg"
import Backgroud from "../../assets/eee.png"
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { GiExitDoor } from 'react-icons/gi'
import { useState } from 'react'
export const OrgDashboard = () => {
    const [isopen, SetIsopen ] = useState(false);
    return (
        <>
            <Nav />
            <div className='flex relative'>
                <div className={` ${isopen ? 'w-[80%] absolute top-0': 'w-[50px] md:w-[50px] relative' }  bg-[#017901]  flex flex-col h-[90vh] rounded-tr-md rounded-br-md overflow-hidden pt-10 items-center transition-all `}>
                    <img src={Backgroud} className={`absolute top-0 h-full opacity-40 ${isopen ? 'flex': 'hidden'}`} alt="" />
                    <CgClose className={`text-white text-[20px] absolute z-10 top-4 right-4 ${isopen ? ' flex' : 'hidden'}`} onClick={() => { SetIsopen(false) }} />
                    <BiMenu className={`text-white text-[20px] absolute z-10 top-4 right-4 ${isopen ? ' hidden': 'flex'}`} onClick={()=>{SetIsopen(true)}}/>
                    <div className={`w-[100px] h-[100px] rounded-[50px] ${isopen ? ' flex': 'hidden'}`}>
                        <img src={Profile} className='w-full h-full rounded-[50px]' alt="" />
                    </div>
                <h2 className={`font-bold font-sans leading-[1] l text-white text-[30px] ${isopen ? ' flex': 'hidden'}`}>PermacTech</h2>
            <p className={`font-sans text-white ${isopen ? ' flex': 'hidden'}`}>olaniyanp11@gmail.com</p>

        <Link className={`text-[#ffffff] bg-[#e9b31f]  border-2 border-[#e9b31f] mt-2  p-2 rounded-[30px] px-5 ${isopen ? ' flex': 'hidden'}`}>Edit  profile</Link>
                    <div className={`absolute bottom-2 right-5 flex items-center text-white ${isopen ? ' flex': 'hidden'}`}>
                        <GiExitDoor className='text-[30px]  ' />
                        <span> Logout</span>
                    </div>
                </div>
                <div className='w-full h-[90vh] p-10 '>
                    <div className='flex justify-center flex-wrap md:justify-between gap-5'>
                        <div className='w-full sm:w-[250px] bg-[#e9b31f] h-[200px] flex rounded-xl shadow-md shadow-[#31280e96] items-center flex-col justify-center '>
                            <h2 className='text-[40px] font-bold text-[#ffffff]'>0</h2>
                            <p className='text-[#ffffff] font-bold'> Products</p>
                        </div>
                        <div className='w-full sm:w-[250px] bg-white h-[200px] flex rounded-xl shadow-xl items-center flex-col justify-center'>
                            <h2 className='text-[40px] font-bold text-[#017901]'>0</h2>
                            <p className='text-[#017901] font-bold'> Purchase</p>
                        </div>
                        <div className='w-full sm:w-[250px] bg-[#017901] h-[200px] flex rounded-xl shadow-md shadow-[#112111c3] items-center flex-col justify-center'>
                            <h2 className='text-[40px] font-bold text-[#ffffff]'>0</h2>
                            <p className='text-[#ffffff] font-bold'> Transactions </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
