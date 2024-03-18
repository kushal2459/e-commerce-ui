import React from 'react'
import Navbar from '../components/Navbar'
import Tagline from '../components/Tagline'
import ProductsPage from './ProductsPage'
import TestProductCard from './Test'

const Home = () => {
  return (
    <>
    <Navbar />
    <Tagline />
    <ProductsPage />
    <TestProductCard />
    </>
  )
}

export default Home