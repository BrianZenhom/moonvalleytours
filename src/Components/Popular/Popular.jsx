<<<<<<< HEAD
import React from 'react'
import './popular.css'

const Popular = () => {
  return (
    <div>
      Popular
    </div>
=======
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './popular.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'

// ======== Images ======== //
import img from '../../Assets/image (1).webp'
import img2 from '../../Assets/image (2).webp'
import img3 from '../../Assets/image (3).webp'
import img4 from '../../Assets/image (4).webp'
import img5 from '../../Assets/image (6).webp'

const PopularData = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Cappadocia',
    location: 'Türkiye',
    subTitle: 'A fascinating place with unique rocks, underground cities, and ancient caves. Explore old churches and houses, or go hiking.',
    grade: 'Nature & Culture'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Dubai',
    location: 'United Arab Emirates',
    subTitle: 'Destination with skyscrapers, resorts, beaches, shopping, sightseeing, desert safaris, and international cuisine. Ideal for a luxurious vacation.',
    grade: 'Luxorious'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Bali',
    location: 'Indonesia',
    subTitle: 'Luxurious resorts, stunning beaches, shopping, cultural sightseeing, wildlife safaris, and international cuisine, perfect for those seeking a high-end experience.',
    grade: 'Nature & Relax'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Giza',
    location: 'Egypt',
    subTitle: 'Structures built as tombs for pharaohs. You can explore the pyramids and learn about their history from guides.',
    grade: 'History & Culture'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Efes',
    location: 'Türkiye',
    subTitle: 'Ancient city, home to ruins such as the Celsus Library, the Great Theatre, and the Temple of Artemis, one of the Seven Wonders of the Ancient World.',
    grade: 'History & Culture'
  },

]

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

            <div className="iconsDiv flex">
              <BsArrowLeftShort className='icon leftIcon' />
              <BsArrowRightShort className='icon' />
            </div>
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
>>>>>>> 939948a (Advanced on navbar)
  )
}

export default Popular
