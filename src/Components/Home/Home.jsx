import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Discover your next adventure.
          </h1>

          <p className="subTitle">
            Let us take the hassle of planning your next adventure.
          </p>

          <button className="btn">
            <a href="#">Explore</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
