import { singleProduct } from '@/app/api-services/productServices';
import BreadCrum from '@/app/common/BreadCrum';
import React from 'react';
import ProductDetailView from './ProductDetail';

export default async function ProductDetail(data) {
    let {id} = await data.params;//object {id:5}
    let productsData=await singleProduct(id);
  return (
    productsData && <>
    <BreadCrum pageName={productsData.title}/>
    <ProductDetailView data={productsData}/>
      
    </>
  );
}
