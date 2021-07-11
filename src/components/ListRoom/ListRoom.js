import React from 'react'
import { Link } from 'react-router-dom'

import './ListRoom.css'

function ListRoom(props) {
  const { houses } = props

  if (!houses) {
    return <p>Loading...</p>
  }

  return (
    <div className='list-room'>
      {houses.map((house) => {
        const {
          id,
          image,
          amenities,
          price,
          typeRent,
          bedroom,
          bathroom,
          area,
          address,
        } = house

        return (
          <div className='room' key={id}>
            <div className='room__image'>
              <img src={image} alt='' />
            </div>
            <div className='room__amenities'>
              {amenities.map((amenity, index) => (
                <div className='room__amenity' key={index}>
                  {amenity}
                </div>
              ))}
            </div>
            <Link className='room__price' to={`/detail/${id}`}>
              Rp.{new Intl.NumberFormat(['ban', 'id']).format(price.toString())}{' '}
              / {typeRent}
            </Link>
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
