import React from 'react'
import Navbar from './Navbar'
import Begining from './Begining'
import Blog from './Blog'
import NelerYaptik from './NelerYaptik'
import Footer from './Footer'
export default function MainPage() {
  return (
    <div>
        <Navbar></Navbar>
        <Begining></Begining>
        <Blog></Blog>
        <NelerYaptik></NelerYaptik>
        <Footer></Footer>
         
    </div>
  )
}
