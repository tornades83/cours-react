import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children, footer}) => {
  return (
    <>
    <Navbar/>
    {children}
    {footer === true  &&
     <Footer />
    }
   
    </>
  )
}

export default Layout
