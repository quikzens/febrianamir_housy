import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { API } from '../config/api'

import Header from '../components/Header'
import Booking from '../components/Modal/Booking'

import bed_icon from '../assets/images/bed-icon.svg'
import bath_icon from '../assets/images/bath-icon.svg'

import './DetailProperty.css'

function DetailProperty() {
  const { id } = useParams()
  const [isShowModalBook, setShowModalBook] = useState(false)
  const [house, setHouse] = useState(null)

  const toggleModalBook = () => setShowModalBook(!isShowModalBook)

  useEffect(() => {
    const getHouse = async () => {
      const response = await API.get(`/house/${id}`)
      const house = response.data.data
      setHouse(house)
    }
    getHouse()
    return () => {
      setHouse(null)
    }
  }, [id])

  if (!house) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Header isWithSearch={false} />
      <div className='detailproperty'>
        <div className='detailproperty__images'>
          <div className='detailproperty__image'>
            <img src={house.image} alt='' />
          </div>
          {/* <img src={detail_home_2} alt='' />
          <img src={detail_home_3} alt='' />
          <img src={detail_home_4} alt='' /> */}
        </div>
        <div className='detailproperty__content'>
          <h1 className='detailproperty__title'>{house.name}</h1>
          <div className='detailproperty__info'>
            <div>
              <div className='detailproperty__price'>
                Rp.
                {new Intl.NumberFormat(['ban', 'id']).format(
                  house.price.toString()
                )}{' '}
                /{' '}
                {house.typeRent.charAt(0).toUpperCase() +
                  house.typeRent.slice(1)}
              </div>
              <div className='detailproperty__address'>{house.address}</div>
            </div>
            <div className='detailproperty__features'>
              <div className='detailproperty__feature'>
                <p>Bedrooms</p>
                <div>
                  {house.bedroom}
                  <img src={bed_icon} alt='' />
                </div>
              </div>
              <div className='detailproperty__feature'>
                <p>Bathrooms</p>
                <div>
                  {house.bathroom}
                  <img src={bath_icon} alt='' />
                </div>
              </div>
              <div className='detailproperty__feature'>
                <p>Area</p>
                <div>{house.area} sqft</div>
              </div>
            </div>
          </div>
          <div className='detailproperty__description'>
            <h3>Description</h3>
            <p>{house.description}</p>
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
        typeRent={house.typeRent}
        price={house.price}
        houseId={house.id}
      />
    </>
  )
}

export default DetailProperty
