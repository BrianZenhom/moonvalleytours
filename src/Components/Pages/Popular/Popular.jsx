/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './popular.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'
import PopularData from './PopularData'

const Popular = () => {
  return (
    
    <section className="popular section container">
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
          {
            PopularData.map(({id, imgSrc,destTitle,location,subTitle,grade}) => {
              return (
                <div className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />

                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>
                        {subTitle}
                      </p>

                      <BsArrowRightShort className='icon' />

                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className="flex">
                        <span className="moon">
                          <BsDot className='icon' />
                        </span>
                        {grade}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Popular

