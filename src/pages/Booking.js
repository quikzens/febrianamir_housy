import React, { useEffect, useState } from 'react'
import { useGet } from '../hooks/useGet'

import BookingItem from '../components/BookingItem'

import './Booking.css'

function Booking() {
  const [bookings, setBookings] = useState(null)
  const { data: dataBookings, invoke: updateBookings } = useGet(
    '/orders?type=booking'
  )

  useEffect(() => {
    setBookings(dataBookings.reverse())
    return () => {
      setBookings(null)
    }
  }, [dataBookings])

  return (
    <>
      {bookings ? (
        <div className='booking'>
          {bookings.length <= 0 && <p>Data booking masih kosong</p>}
          {bookings.map((booking) => (
            <BookingItem
              booking={booking}
              key={booking.id}
              updateBookings={updateBookings}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Booking
