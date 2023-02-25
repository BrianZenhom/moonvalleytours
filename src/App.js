import React from 'react'
import './app.css'
import Destinations from './Components/Destinations/Destinations.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Offer from './Components/Offers/Offer.jsx'
import Popular from './Components/Popular/Popular.jsx'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <Home />
        {/* <Popular />
        <Offer />
        <Destinations />
        <About />
        <Footer /> */}
      </>
    </div>
  )
}

export default App
