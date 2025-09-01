'use client'
import React, { useState } from 'react';

const productsData={
  featured:[
   { id:1, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg',
    title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3,000',
    rate: 'Rs.2500'
   },

   { id:2, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg',
    title:'Coffee Tables',
    type: 'Evan Coffee Table',
    oldrate:'Rs.2,600',
    rate: 'Rs.2,300'
  
   },
   { id:3, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg',
    title:'Shoe Racks',
    type: 'Gloria Shoe Racks',
    oldrate:'Rs.3400',
    rate: ' Rs.2,900'
  
   },
   { id:4, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg',
    title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3500',
    rate: 'Rs.2500'
  
   },
   { id:5, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg',
    title:'Bookshelves',
    type: 'Erica Bookshelfs',
    oldrate:'Rs.38000',
    rate: ' Rs.30,000'
  
   },
   { id:6, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615225341228Ganthur%20Sheesham%20Wood%20Sofa%20Set___.jpg',
    title:'Wooden Sofa Cum Bed',
    type: 'Sapien Sofa Cum Bed',
    oldrate:'Rs.64000',
    rate: 'Rs.54,000'
  
   },
   { id:7, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg',
    title:'Wooden Jhula',
    type: 'Calina Swing Jhula',
    oldrate:'Rs.65000',
    rate: 'Rs.58000'
   },
   
  ],
  newArrival:[
    { id:1, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:2, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:3, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:4, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:5, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617989633213Winona%20Mirror__.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:6, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:7, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663996596738Group%201.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    
  ],
  sales:[
    { id:1, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:2, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg',
    title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:3, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1619988418966Leo%20TV%20Cabinets.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3000',
    rate: 'Rs.2500'
  
    },
    { id:4, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1661762520951Group%201.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.3500',
    rate: 'Rs.2500'
  
    },
    { id:5, img:'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1661502549484Group%201.jpg',
      title:'Nest of Tables',
    type: 'study table',
    oldrate:'Rs.4000',
    rate: 'Rs.2500'
  
    },
    
  ]
}


export default function HomeProducts() {
  let [activeMenu, setActiveMenu] = useState('featured')
  return (
    <div className="max-w-[1200px] mx-auto my-8 ">
            {/*Menu*/}
      <div className="flex justify-center p-4 mb-6">
        <button className={`px-6 py-2 border-2 ${activeMenu === 'featured'?' text-[#C09578] border-2 border-[#C09578]':'bg-white border-2 border-gray-200 hover:text-[#C09578]'}`}
          onClick={() => setActiveMenu('featured') }>
          Featured
        </button>
        <button className={`px-6 py-2 border-2 ${activeMenu === 'newArrival'?' text-[#C09578] border-2 border-[#C09578]':'bg-white border-2 border-gray-200 hover:text-[#C09578]'}`}
          onClick={() => setActiveMenu('newArrival')}>
          New Arrival
        </button>
        <button className={`px-6 py-2 border-2 ${activeMenu === 'sales'?' text-[#C09578] border-2 border-[#C09578]':'bg-white border-2 border-gray-200 hover:text-[#C09578]'}`}onClick={()=>setActiveMenu('sales')}>
          OnSale</button>
      </div>
      {/* Images */}
      <div className='relative grid grid-cols-4 gap-6 align-center'>
       {productsData[activeMenu].map((product) => (
      <div key={product.id} className="bg-white rounded shadow flex flex-col items-center">
        <img
        src={product.img}
        alt={product.title}
        className="w-full object-cover  mb-3"
        />
      <h4 className=" cursor-pointer text-[12px] text-gray-500 mb-1 hover:text-[#C09578]">{product.title}</h4>
      <p className="text-[14px] text-black mb-1">{product.type}</p>
      {product.oldrate && (
        <p className="flex line-through text-black text-[12px]">{product.oldrate}</p>
        
      )}<p className="font-bold text-[#C09578]">{product.rate}</p>
    </div>
  ))}
</div>
      
    
    
      </div>
  );
}


  
  