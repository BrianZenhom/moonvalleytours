import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../app.css'
// import Destinations from './Destinations/Destinations.jsx'
import Navbar from '../Components/Pages/Navbar/Navbar'
import Home from '../Components/Pages/Home/Home.jsx'
// import Footer from './Footer/Footer.jsx'
import Offer from '../Components/Pages/Offers/Offer.jsx'
import Popular from '../Components/Pages/Popular/Popular.jsx'
// import About from './About/About.jsx'

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