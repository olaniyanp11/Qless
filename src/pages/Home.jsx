import React from 'react'
import {Nav} from "../components/Nav"
import Hero from '../assets/0x0.webp'
import { Link } from 'react-router-dom'
import { BiReceipt } from 'react-icons/bi'
import { GiPlatform } from 'react-icons/gi'
import { BsDatabase } from 'react-icons/bs'
import { Footer } from '../components/Footer'
import About from "../assets/about.jpg"
import Queue from "../assets/queue.jpg"
import { BiCheckCircle } from 'react-icons/bi'
import Group from "../assets/group.jpg"
import { useState } from 'react'

export const Home = () => {
  return (
    <>
      <div className='bg-white absolute w-full h-full overflow-x-hidden'>
        <Nav />
        <div id='home' className='w-full h-[90vh] relative'>
          <img src={Hero} alt="" className='w-full object-cover bg-top bg-no-repeat h-full absolute z-1' />
          <div className='w-full h-full absolute bg-[#082908a8] z-2 top-0'></div>
          <div className='absolute top-0 w-full h-full flex flex-col  justify-center items-start pl-[13%]'>
            <h1 className='text-[100px] sm:text-[130px] font-bold text-white mb-0 pb-0 leading-[0.8] '>Qless</h1>
            <article className='w-full sm:w-1/2 text-neutral-100 '>Qless is your one-stop receipt generating app. Effortlessly create, organize, and manage your receipts with ease. </article>
            <Link to='/signup' className='bg-[#e9b31f] mt-4 p-3 px-8 text-center font-bold text-[white]  rounded-sm border border-[#e9b31f] hover:bg-[white] hover:text-[#e9b31f] transition-all duration-300'>Get started now </Link>
          </div>
        </div>
        <div className='flex justify-center mb-[80px]'>
          <div className='bg-white border border-[#017901] w-3/4  p-5 z-[10] relative mt-[-80px]  rounded-md flex md:flex-row flex-col items-center gap-3 sm-absolute'>
            <div className='flex justify-center items-center flex-col md:w-1/3 w-full text-center'>
              <BiReceipt className='text-[#03c703] text-4xl' />
              <p className='text-[#017901] '>Effortless Receipt Generation</p>
              <article className='text-sm text-neutral-400'>With just a few clicks, generate professional, branded receipts that leave a lasting impression on your customers.</article>
            </div>
            <div className='flex justify-center items-center flex-col md:w-1/3 w-full text-center'>
              <GiPlatform className='text-[#03c703] text-4xl' />
              <p className='text-[#017901] '>Multi-Platform Support</p>
              <article className='text-sm text-neutral-400'>Use Qless on any device—desktop, tablet, or mobile.</article>
            </div>
            <div className='flex justify-center items-center flex-col md:w-1/3 w-full text-center'>
              <BsDatabase className='text-[#03c703] text-4xl' />
              <p className='text-[#017901] '>Customer Database</p>
              <article className='text-sm text-neutral-400'> Keep track of your customers and their purchase history with ease.</article>
            </div>
          </div>
        </div>
        <section className=''>
          <h2 className='text-center text-[#017901] font-bold text-[40px]'>Why choose Qless</h2>
          <section >
            <div className='flex w-full py-10 md:px-11 px-0 sm:flex-col md:flex-row flex-col justify-end items-center '>
              <div className='md:w-1/2 mb-10 md:mb-10  w-full flex flex-col gap-4 '>
                  <div className='flex  gap-1 justify-center md:justify-end'>
                  <BiCheckCircle className='text-[#017901] text-[40px]' />
                  <article className='text-sm text-neutral-400 w-2/3'>
                    <span className='text-[#017901] font-bold'> Effortless Receipt Generation:</span> With just a few clicks, generate professional, branded receipts that leave a lasting impression on your customers.
                  </article>
                </div>
                <div className='flex  gap-1 justify-center md:justify-end'>
                  <BiCheckCircle className='text-[#017901] text-[40px]' />
                  <article className='text-sm text-neutral-400 w-2/3'>
                    <span className='text-[#017901] font-bold'>   Time-Saving Automation:</span> Automate your receipt generation process and reduce manual errors, ensuring accuracy and consistency every time..
                  </article>
                </div>
                <div className='flex  gap-1 justify-center md:justify-end'>
                  <BiCheckCircle className='text-[#017901] text-[40px]' />
                  <article className='text-sm text-neutral-400 w-2/3'>
                    <span className='text-[#017901] font-bold'>Secure and Compliant:</span> Qless adheres to the highest standards of security and compliance, protecting your business and customer data.
                  </article>
                </div>
              </div>
              <div className='h-[350px] sm:w-full md:w-1/2 w-[90%] flex justify-center relative px-3 sm:px-0'>
                <img src={Group} alt="" className='w-[500px] rounded-md absolute bg-cover ' />
              </div>
            </div>
            <div></div>
          </section>
        </section>
        <section className='w-full h-[150px] relative'>
          <img src={Queue} alt="" className='w-full h-full object-cover absolute z-1' />
          <div className='absolute bg-[#031b03a5] z-10 w-full h-full top-0'></div>
          <div className='text-white absolute top-0 z-20 font-sans w-full py-5 '>
            <div className='font-bold text-[40px] text-center'>Get started with Qless </div>
            <article className='text-center'> join the growing community of businesses that trust Qless to simplify their operations and enhance customer satisfaction. </article>
          </div>
        </section>
        <div className='mt-[100px] flex justify-center items-center'>
          <div className='sm:w-3/4 w-full py-5 bg-[#041e0409] backdrop-blur-md p-3 flex flex-col items-center rounded-md mb-10'>
            <h2 className='text-center text-[#017901] font-bold text-[40px]'>About us</h2>
            <span className='w-full flex flex-col justify-center items-center'>
              <small className='text-center text-sm w-2/3 text-neutral-400 '> Qless is your all in one solution for efficient and hassle free receipt generation. Designed for business of all sizes.

              </small>
              <div className='relative w-full  flex flex-col md:flex-row justify-center md:justify-between gap-10 px-[50px] pb-10 pt-10'>
                <div className='w-full md:w-1/3 h-250px rounded-lg '>
                  <img src={About} className=' top-0 rounded-xl h-full' alt="" />
                </div>
                <div className='w-full md:w-1/3 h-250px rounded-lg '>
                  <img src={About} className=' top-0 rounded-xl' alt="" />
                </div>
                <div className='w-full md:w-1/3 h-250px rounded-lg '>
                  <img src={About} className=' top-0 rounded-xl' alt="" />
                </div>
              </div>
            </span>
          </div>
        </div>
        <section className=''>

        </section>
        <Footer />
      </div>
    </>
  )
}
