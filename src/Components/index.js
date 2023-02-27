import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../app.css'
import Destinations from './Destinations/Destinations.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Home from './Home/Home.jsx'
import Footer from './Footer/Footer.jsx'
import Offer from './Offers/Offer.jsx'
import Popular from './Popular/Popular.jsx'
import About from './About/About.jsx'

const index = () => {
  return (
    <div>
      <>
        <Navbar />
        <Home />
        <Popular />
        <Offer />
        {/* <Destinations />
        <About />
        <Footer /> */}
      </>
    </div>
  )
}

export default index