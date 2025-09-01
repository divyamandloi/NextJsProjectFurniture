import React from 'react';

export default function HomeNewLetter() {
  return (
    
      <>
      <section className='bg-gray-100 p-15'>
        <h1 className='font-bold text-center p-2 text-[30px] sm:text-[25px]'>Our Newsletter</h1>
        <p className='text-center'>Get E-mail updates about our latest shop and special offers.</p>
        <div className='flex mx-auto max-w-[600px] text-center p-5'>
          <input type="email" className='border-slate-400 border-1 rounded-lg p-2 w-100' placeholder='Email Address ........'/>
          <button className='text-center font-bold p-3 border-1 w-55 bg-[#c09578] rounded-lg text-white'>Subscribe</button>
        </div>
      </section>
    </>

    
  );
}
