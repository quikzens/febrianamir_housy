import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BookingItem from '../components/BookingItem'

import { API } from '../config/api'
import './Booking.css'

function Booking() {
  const [bookings, setBookings] = useState(null)

  const getBookings = async () => {
    const response = await API.get('/orders?type=booking')
    const dataBookings = response.data.data
    setBookings(dataBookings)
    console.log(dataBookings)
  }

  useEffect(() => {
    getBookings()
    return () => {
      setBookings(null)
    }
  }, [])

  return (
    <>
      <Header isWithSearch={false} />
      {bookings ? (
        <div className='booking'>
          {bookings.map((booking) => (
            <BookingItem booking={booking} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Booking
