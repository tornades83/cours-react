import React from 'react'
import Navbar from '../../componets/Navbar/Navbar';
import Header from '../../componets/Header/Header';
import Footer from '../../componets/Footer/Footer';
import './Blog.css'
const Blog = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className='blog'>
    Hello Blog
    </div>
    <Footer />
   
    </>
  )
}

export default Blog