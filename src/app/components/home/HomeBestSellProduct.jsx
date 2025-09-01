'use client'
//import { homeFeaturedProducts } from '@/app/api-services/homeservices';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { IoIosArrowForward, IoMdHeart } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ProductCard from '@/app/common/ProductCard';

export default function HomeBestSellProduct() {
    const [products,setProducts]= useState([]);
    
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>res.data)
        .then((finalRes)=>setProducts(finalRes.products.slice(0,25)));

    },[])
   
    const settings = {
    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
   // autoplaySpeed: 500,
    initialSlide:0,
    //nextArrow:<NextArrow/>,
    nextArrow:<NextArrow/>,
   prevArrow:<PrevArrow/>,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2,slidesToScroll:2,infinite:true } },
      { breakpoint: 600, settings: { slidesToShow: 1,slidesToScroll:1,infinite:true } }
    ]
  };

return (
    
<div className='m-auto max-w[1000px] mx-auto p-8 py-2'>
    <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      <hr className="mb-6" />
      
      <Slider {...settings}>
        
        {products.map(product=>(
            <div key={product.id} className="px-2">
            <div className="relative bg-white rounded shadow shadow-gray-500 p-2 flex flex-col items-center">
              <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover rounded mb-3 boder-box"/>
              <h4 className="font-semibold text-center">{product.title}</h4>
              <button className='flex justify-center'><IoMdHeart/>Add</button>
              
            </div>
          </div>

        ))}

      </Slider>

</div>
   );
}
function NextArrow(props){
    const {style, className,onClick}=props;
       
    return(
         <IoIosArrowForward className={className}
         style={{...style, display:'block',
            color:'black',
            fontSize:'2.5rem',
            right:'10px',
            zIndex:2,
            position:'absolute',
            top:-25,
            right:10,
            background:'white',
            zIndex:0,
         }}
         onClick={onClick}/>
    );
}

function PrevArrow(props){
    const {style,className,onClick}=props;
    return(
        <IoIosArrowBack className={className
        } 
        style={{...style,display:'block',
            color:'black',
            fontSize:'2.5rem',
            left:'10px',
            zIndex:2,
            position:'absolute',
            background:'white',
            top:-25,
            left:1250

        }} onClick={onClick}/>

    )
}

