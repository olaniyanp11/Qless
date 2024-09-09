import React from 'react'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const SingleProduct = () => {
    const product = {
        id: 1,
        name: "Concert Ticket",
        image: "https://img.freepik.com/free-psd/music-party-template-design_23-2151508784.jpg?size=626&ext=jpg&uid=R94401844&ga=GA1.1.1192478636.1698434266&semt=ais_hybrid", // Replace with your own image
        rating: 4.7,
        description: "Get your tickets to the hottest concert in town! Enjoy live performances from top artists. Available in various seating options."
    }
    return (
        <>
            <Nav />
            <div className='flex justify-center pb-10 pt-10'>
                <div className='w-1/2 text-neutral-500'>
                    <div className='w-full flex justify-center h-[300px] mb-5'>
                        <img src={product.image} alt="" />
                    </div>
                    <h2 className='text-3xl text-start font-bold mb-2 text-neutral-600'>
                        {product.name}
                    </h2>
                    <div className='flex justify-start'>
                        <BsStarFill className='text-[#FFD700]' />
                        <BsStarFill className='text-[#FFD700]' />
                        <BsStarFill className='text-[#FFD700]' />
                    </div>
                    <article>
                        {product.description}
                    </article>
                    <Link to={"/"} className='border-solid bg-[#017901]  text-center p-3 text-white mt-2 rounded-lg border-[#017901] block '>buy now</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
