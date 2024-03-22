import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Tagline from './Tagline'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <Tagline />
        <div className='main-content min-h-screen'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout