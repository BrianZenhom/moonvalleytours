/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './popular.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'
import PopularData from './PopularData'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 
const Popular = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <section id='popularItems' className="popular section container">
      <div className="secContainer">
      
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destinations
            </h2>
            <p>
              Top picks for must-visit destinations around the world!
            </p>
          </div>
          
          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon' />
          </div>
        </div>

        <div className="mainContent grid">

        </div>
        <Carousel
        draggable={true}
        responsive={responsive}>
          {
            PopularData.map(popularItems => {
              return (
                <div key={popularItems.id} className="singleDestination">
                  <div className="destImage">
                    <img src={popularItems.imgSrc} alt="Image title" />

                    <div className="overlayInfo">
                      <h3>{popularItems.destTitle}</h3>
                      <p>
                        {popularItems.subTitle}
                      </p>

                      <BsArrowRightShort className='icon' />

                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{popularItems.id}
                    </div>

                    <div className="destText flex">
                      <h6>{popularItems.location}</h6>
                      <span className="flex">
                        <span className="moon">
                          <BsDot className='icon' />
                        </span>
                        {popularItems.grade}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </section>
  )
}

export default Popular

