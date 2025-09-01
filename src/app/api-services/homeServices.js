const { default: axios } = require("axios")
//import axios from "axios"
let bannerApi=()=>{
    return axios.get('https://dummyjson.com/products')
    .then(res =>res.data)
    .then((finalRes)=>finalRes.products.slice(0,5))//promise
}

let homeFeaturedProducts =(catName='smartphones')=>
    {
        return axios.get(`https://dummyjson.com/products/category/$(catName)`)
        .this(res=>res.data)
        .then((finalRes)=>finalRes.products);
    }


    export {bannerApi,homeFeaturedProducts}