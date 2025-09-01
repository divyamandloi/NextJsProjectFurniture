import React from 'react';
import { FaFacebookF } from "react-icons/fa"
import { CiInstagram } from "react-icons/ci"
import { TiSocialTwitter } from "react-icons/ti"
import { FaLinkedinIn } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { BsTelegram } from "react-icons/bs"

export default function Footer() {
  return (
  <>
  <footer className='bg-white'>
    <div className='grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1 max-w-[1320px] mx-auto p-5'>
            <div className=''>
              <h2 className='font-bold'>Contact Us</h2>
              <p className='text-slate-500 text-[14px] py-2'>
                Address: Claritas est etiam processus dynamicus<br></br>

                Phone: 98745612330<br></br>

                Email: furnitureinfo@gmail.com
              </p>
              <ul className='flex items-center gap-2'>
                 <li>
                    <a href="https://facebook.com" target="_blank">
                      <FaFacebookF className=' border-gray-500 rounded-full border-1 text-[25px] text-gray-400 p-1'/>
                    </a>
                  </li>
                 <li>
                    <a href="https://instagram.com" target="_blank">
                       <CiInstagram  className=' border-gray-500 rounded-full border-1 text-[25px] text-gray-400 p-1'/> 
                    </a>
                  </li>
                 <li>
                  <a href="https://twitter.com" target="_blank">
                    <TiSocialTwitter  className=' border-gray-500 rounded-full border-1 text-[25px] text-gray-400 p-1'/> 
                  </a>
                 </li>
                 <li>
                  <a href="https://linkedin.com" target="_blank">
                    <FaLinkedinIn  className=' border-gray-500 rounded-full border-1 text-[25px] text-gray-400 p-1'/> 
                  </a>
                  </li>
                 <li>
                  <a href="https://youtube.com" target="_blank">
                     <FaYoutube  className=' border-gray-500 rounded-full border-1 text-[25px] text-gray-400 p-1'/> 
                  </a>
                 </li>
                 <li>
                  <a href="https://telegram.com" target="_blank">
                    <BsTelegram  className=' border-gray-500 rounded-full border-1 text-[25px] text-gray-400 p-1'/> 
                  </a>
                 </li>
              </ul>
            </div>
            <div className=''>
               <h2 className='font-bold'>Information</h2>
                <ul className='text-slate-500 text-[14px] py-2'>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Frequently Questions</li>
                </ul>
            </div>
            <div className=''>
               <h2 className='font-bold'>My Account</h2>
                <ul className='text-slate-500 text-[14px] py-2'>
                  <li>My Dashboard</li>
                  <li>Wishlist</li>
                  <li>Cart</li>
                  <li>Checkout</li>
                </ul>
            </div>
            <div className=''>
               <h2 className='font-bold'>Top Rated Products</h2>
               <div className='' >
                  <div className='flex'>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg" alt="" 
                    className='w-25 p-1'></img>
                    <p className='text-[12px] p-1'>
                      Chest Of Drawers<br></br>
                     <span className='text-[17px] text-blue-900'> Isaac Chest of Drawer</span><br></br>
                     <span className='line-through text-[14px] font-bold p-1'>Rs. 32,000</span>
                     <span className='text-red-950 text-[14px] font-bold p-1'>Rs. 25,000</span> 
                    </p>
                   
                      {/* 
                    </p> */} 
                  </div>   
               </div>
                <div className='' >
                  <div className='flex'>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg" alt="" 
                    className='w-25 p-1'></img>
                    <p className='text-[12px] p-1'>
                     Prayer Units<br></br>
                     <span className='text-[15px] text-blue-950'>Hardwell Temple Prayer Unit</span><br></br>
                     <span className='line-through text-[14px] font-bold p-1'>Rs. 10,000</span>
                     <span className='text-red-950 text-[14px] font-bold p-1'>Rs. 9,400</span> 
                    </p>
                   
                 
                  </div>   
               </div>
            </div>
        </div>

        <div className='max-w-[600px] mx-auto'>
            <nav>
                <ul className='flex items-center mx-auto gap-10 p-3 text-slate-500 font-bold'>
                  <div className='mx-auto flex gap-10'>
                    <li>Home</li>
                    <li>Online Store</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                  </div>
                </ul>       
            </nav>
        </div>

        <div className='max-w-[600px] mx-auto'>
          <div className=''>
            <p className='text-center p-3 text-slate-500 font-bold'>
              All Rights Reserved By Furniture | © 2025
            </p>
          </div>     
        </div>
        <div className='max-w-[600px] mx-auto'>
          <div className=' flex items-center p-3 '>
              <img src="https://www.wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png" alt="" className='mx-auto'/>
          </div>
        </div>
 

  </footer>
  
  </>

    
  );
}
