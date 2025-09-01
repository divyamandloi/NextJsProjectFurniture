"use client"

import React from 'react'
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6"

export default function HomeOurCustomer() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    //position:"absolute",
    
    };
 
  return (
    <>
    <section className=' p-0 '>
        <Slider {...settings} className=' text-center py-15'>
        <div className='m-0'>
        <h1 className='font-bold text-center p-2 text-[30px] mx-auto'>What Our Custumers Say ?</h1>
        <p className='text-center p-2 max-w-[1000px] mx-auto text-gray-600'>
          These guys have been absolutely outstanding. 
          Perfect Themes and the best of all that you have many options to choose! 
          Best Support team ever! Very fast responding! Thank you very much! 
          I highly recommend this theme and these people!
          </p>
          <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" alt="" className='text-center mx-auto p-2'/>
          <p className='text-[12px]'>KATHY YOUNG</p>
          <p className='text-center p-2'>CEO of SunPark</p>
          <div className='flex items-center mx-auto max-w-[100px]'>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
          </div>
        </div>
        <div className=''>
        <h1 className='font-bold text-center p-2 text-[30px] mx-auto'>What Our Custumers Say ?</h1>
        <p className='text-center p-2 max-w-[1000px] mx-auto text-gray-600'>
          These guys have been absolutely outstanding. 
          Perfect Themes and the best of all that you have many options to choose! 
          Best Support team ever! Very fast responding! Thank you very much! 
          I highly recommend this theme and these people!
          </p>
          <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" alt="" className='text-center mx-auto p-2'></img>
          <p className='text-[12px]'>KATHY YOUNG</p>
          <p className='text-center p-2'>CEO of SunPark</p>
          <div className='flex items-center mx-auto max-w-[100px]'>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
          </div>
          
        </div>
      
      <div className=''>
        <h1 className='font-bold text-center p-2 text-[30px] mx-auto'>What Our Custumers Say ?</h1>
        <p className='text-center p-2 max-w-[1000px] mx-auto text-gray-600'>
          These guys have been absolutely outstanding. 
          Perfect Themes and the best of all that you have many options to choose! 
          Best Support team ever! Very fast responding! Thank you very much! 
          I highly recommend this theme and these people!
          </p>
          <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" alt="" className='text-center mx-auto p-2'></img>
          <p className='text-[12px]'>KATHY YOUNG</p>
          <p className='text-center p-2'>CEO of SunPark</p>
          <div className='flex items-center mx-auto max-w-[100px]'>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
            <FaStar className='text-[#c09578] text-center'/>
          </div>
        </div>
      
    </Slider>
    </section>
    </>
  );
}
