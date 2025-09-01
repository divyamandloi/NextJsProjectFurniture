import Image from "next/image";
import "slick-carousel/slick/slick.css";// Import css files
import "slick-carousel/slick/slick-theme.css";

import HomeBanner from "./components/home/HomeBanner";
import HomeCollection from "./components/home/HomeCollection";
import HomeProducts from "./components/home/HomeProducts";
import HomeBottomBanner from "./components/home/HomeBottomBanner";
import HomeBestSellProduct from "./components/home/HomeBestSellProduct";
//import HomeWeb from "./components/HomeWeb";
import HomeOurCustomer from "./components/home/HomeOurCustomer";
import HomeNewLetter from "./components/home/HomeNewLetter";
import HomeWeb from "./components/home/HomeWeb";
//import { bannerApi, homeFeaturedProducts } from "./api-services/homeservices";
//import HomeFooterBanner from "./components/HomeFooterBanner";



//Data call Using API /Props
//Home Page
export default function Home() {
  // let bannerData = bannerApi();
  // let productsData=homeFeaturedProducts()

  
  return (
   <>
   <HomeBanner/>
   <HomeCollection/>
   <HomeProducts/>
   <HomeBottomBanner/>
   <HomeBestSellProduct/>
  <HomeWeb/>
   <HomeOurCustomer/>
   <HomeNewLetter/>
  
   
   </>
  );
}
