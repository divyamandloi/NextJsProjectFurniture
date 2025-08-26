import Image from "next/image";
import "slick-carousel/slick/slick.css";// Import css files
import "slick-carousel/slick/slick-theme.css";

import HomeBanner from "./components/home/HomeBanner";
import HomeCollection from "./components/home/HomeCollection";
import HomeProducts from "./components/home/HomeProducts";

//Data call Using API /Props
//Home Page
export default function Home() {
  return (
   <>
   <HomeBanner/>
   <HomeCollection/>
   <HomeProducts/>
   </>
  );
}
