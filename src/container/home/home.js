import React from "react";
import Header from "../../components/header/header";
import Home_Carousel from "../../components/carousel/home/home_Carousel";
import Home_Category from "../../components/carousel/category/category";
import Home_banner from "../../components/banner/home/home_banner1";
import Home_Banner_Product from "../../components/product/home/home_banner_product";
import Home_Sale_Product from "../../components/product/sale/sale";
import Best_Seller from "../../components/product/best_seller/best_seller";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Home_Carousel />
      <Home_Category />
      <Home_banner />
      <Home_Banner_Product />
      <Home_Sale_Product />
      <Best_Seller />
      <Footer />
    </div>
  );
};

export default Home;
