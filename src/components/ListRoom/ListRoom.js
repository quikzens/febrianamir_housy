import React from 'react'

import './ListRoom.css'

const ListRoom = (props) => {
  const { houses } = props

  return (
    <div className='list-room'>
      {houses.map((house, index) => {
        const {
          image,
          amenities,
          price,
          rent,
          bedroom,
          bathroom,
          area,
          address,
        } = house

        return (
          <div className='room' key={index}>
            <img className='room__image' src={image} alt='' />
            <div className='room__amenities'>
              {amenities.map((amenity, index) => (
                <div className='room__amenity' key={index}>
                  {amenity}
                </div>
              ))}
            </div>
            <p className='room__price'>
              Rp.{new Intl.NumberFormat(['ban', 'id']).format(price.toString())}{' '}
              / {rent}
            </p>
            <p className='room__property'>
              {bedroom} Beds, {bathroom} Baths, {area} sqft
            </p>
            <p className='room__address'>{address}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ListRoom
