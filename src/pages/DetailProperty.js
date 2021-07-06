import React, { useState } from 'react'

import Header from '../components/Header'
import Booking from '../components/Modal/Booking'

import detail_home_1 from '../assets/images/detail-home-1.jpg'
import detail_home_2 from '../assets/images/detail-home-2.jpg'
import detail_home_3 from '../assets/images/detail-home-3.jpg'
import detail_home_4 from '../assets/images/detail-home-4.jpg'
import bed_icon from '../assets/images/bed-icon.svg'
import bath_icon from '../assets/images/bath-icon.svg'

import './DetailProperty.css'

const DetailProperty = () => {
  const [isShowModalBook, setShowModalBook] = useState(false)

  const toggleModalBook = () => setShowModalBook(!isShowModalBook)

  return (
    <>
      <Header isWithSearch={false} />
      <div className='detailproperty'>
        <div className='detailproperty__images'>
          <img src={detail_home_1} alt='' />
          <img src={detail_home_2} alt='' />
          <img src={detail_home_3} alt='' />
          <img src={detail_home_4} alt='' />
        </div>
        <div className='detailproperty__content'>
          <h1 className='detailproperty__title'>House Astina</h1>
          <div className='detailproperty__info'>
            <div>
              <div className='detailproperty__price'>Rp.9.000.000 / Year</div>
              <div className='detailproperty__address'>
                Jl. Elang IV Perum Permata Bintaro Residence, Pondok
                Aren,Tangerang Selatan
              </div>
            </div>
            <div className='detailproperty__features'>
              <div className='detailproperty__feature'>
                <p>Bedrooms</p>
                <div>
                  3
                  <img src={bed_icon} alt='' />
                </div>
              </div>
              <div className='detailproperty__feature'>
                <p>Bathrooms</p>
                <div>
                  3
                  <img src={bath_icon} alt='' />
                </div>
              </div>
              <div className='detailproperty__feature'>
                <p>Area</p>
                <div>1800 ft</div>
              </div>
            </div>
          </div>
          <div className='detailproperty__description'>
            <h3>Description</h3>
            <p>
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className='detailproperty__cta'>
            <button type='button' onClick={toggleModalBook}>
              book now
            </button>
          </div>
        </div>
      </div>
      <Booking
        isShowModalBook={isShowModalBook}
        toggleModalBook={toggleModalBook}
      />
    </>
  )
}

export default DetailProperty
