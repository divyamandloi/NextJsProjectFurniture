import React from 'react';
import { getProduct } from '../api-services/productServices';
import BreadCrum from '../common/BreadCrum';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

export default async function Produts() {
    let product=await getProduct()
    //    let [product,setProduct]=useState([])
//    useEffect(()=>{
//         getProduct();
//    },[])
let pageName ="Products";
  return (
    <div>
        <BreadCrum pageName={pageName}/>
        <div className='max-w-[1320px] mt-[50px] mx-auto grid grid-col-[20%_auto] gap-5'>
       {/*<ProductFilter/>*/} 
        <ProductList product={product}/>
        </div>
      
    </div>
  );
}
