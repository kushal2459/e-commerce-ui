import React from "react";
import Tagline from "../components/Tagline";
import ProductsPage from "../sections/ProductsPage";
// import TestProductCard from "./Test";
import About from "../sections/About";
import HeroSection from "../sections/Hero";
import FAQ from "../sections/FAQ";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div id="home">
    <Layout>
      <Tagline />
      <HeroSection />
      <div className="flex flex-col gap-20 mx-24 mb-24">
        <ProductsPage />
        <About />
        {/* <TestProductCard /> */}
        <FAQ />
      </div>
    </Layout>
    </div>
  );
};

export default Home;
