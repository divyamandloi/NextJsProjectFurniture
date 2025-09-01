'use client'
import Link from 'next/link';
import React, { useState } from 'react';

//import { useState } from "react";

export default function LoginPage() {
  function handleSubmit(e) {
    e.preventDefault();
    // Add login logic here
    alert(`Email: ${email}\Password: ${password}`);
  }
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('');

  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#C09578]">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C09578]"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C09578]"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <Link href={'/'}><button
          type="submit"
          className="w-full bg-[#C09578] text-white py-2 rounded font-bold hover:bg-[#a67c52] transition-colors duration-200"
        >Login
          
        </button></Link>
      </form>
      
    </div>
  );
}



