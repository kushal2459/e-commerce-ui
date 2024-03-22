import React, { useContext } from "react";
import ProductsPage from "../sections/ProductsPage";
import About from "../sections/About";
import HeroSection from "../sections/Hero";
import FAQ from "../sections/FAQ";
import Layout from "../components/Layout";
import myContext from "../context/myContext";

const Home = () => {
  const context = useContext(myContext);
  const name = context;

  return (
    <div id="home">
    <Layout>
      <HeroSection />
      <div className="flex flex-col gap-20 mx-24 mb-24">
        <ProductsPage />
        <About />
        {name}
        <FAQ />
      </div>
    </Layout>
    </div>
  );
};

export default Home;
