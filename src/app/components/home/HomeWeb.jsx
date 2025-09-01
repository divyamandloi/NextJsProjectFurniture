import React from 'react';
import { IoMdGlobe } from "react-icons/io"
import { TiTickOutline } from "react-icons/ti"
import { GoClock } from "react-icons/go"


export default function HomeWeb() {
  return (
    <>
      <section>
          <div className='max-w-[1000px]mx-auto bg-slate-50 p-10'>
            <div className='lg:flex justify-between grid gap-5  md:grid-cols-2 sm:grid-cols-1 text-center'>
                <div className='p-5 mx-auto'>
                  <IoMdGlobe className='hover:text-[#C09578] p-4 text-[55px] border-2 rounded-full mx-auto'/>
                  <p className='p-5 font-bold text-[18px] text-center'>Free Shipping</p>
                  <p className='text-center'>Free shipping on all order</p>
                </div>
                <div className='p-5  mx-auto'>
                  <TiTickOutline className='hover:text-[#C09578] p-4 text-[55px] border-2 rounded-full mx-auto'/>
                  <p className='p-5 font-bold text-[18px] text-center'>Money Online</p>
                  <p className='text-center'>Back guarantee under 7 days</p>
                </div>
                <div className='p-5 mx-auto'>
                  <GoClock className='hover:text-[#C09578] p-4 text-[55px] border-2 rounded-full mx-auto'/>
                  <p className='p-5 font-bold text-[18px] text-center'>Online Support</p>
                  <p className='text-center'>Support online 24 hours a day</p>
                </div>
            </div>
            
          </div>
      </section>

    </>
  );
}

