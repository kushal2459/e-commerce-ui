import React from "react";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import ProductsPage from "../sections/ProductsPage";
// import TestProductCard from "./Test";
import About from "./About";
import HeroSection from "../sections/Hero";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Tagline />
      <HeroSection />
      <div className="flex flex-col gap-20 mx-24 mb-24">
        <ProductsPage />
        <About />
        {/* <TestProductCard /> */}
        <FAQ />
      </div>
        <Footer />
    </div>
  );
};

export default Home;
