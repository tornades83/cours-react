import React, {useState} from 'react'
import Navbar from '../../componets/Navbar/Navbar';
import Header from '../../componets/Header/Header';
import Footer from '../../componets/Footer/Footer';
import './Blog.css'
const Blog = (props) => {
  return (
    <>
    <Header name={props.name} />
    <Navbar />
    <div className='blog'>
    Hello Blog
    </div>
    <Footer name={props.name} />
   
    </>
  )
}

export default Blog