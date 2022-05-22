import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcment from '../../components/Announcment/Announcment'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Announcment />
      <Slider />
      <Categories />
      <Products />
      <Newsletter/>
      <Footer />
    </>
  )
}

export default Home
