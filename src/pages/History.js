import { useEffect, useState } from 'react'
import { useGet } from '../hooks/useGet'

import BookingItem from '../components/BookingItem'

import './Booking.css'

function History() {
  const [histories, setHistories] = useState(null)
  const { data: dataHistories } = useGet('/orders?type=history')

  useEffect(() => {
    setHistories(dataHistories.reverse())
    return () => {
      setHistories(null)
    }
  }, [dataHistories])

  return (
    <div className='booking'>
      {!histories ? (
        <p>Loading...</p>
      ) : (
        <>
          {histories.length <= 0 && <p>Data history masih kosong</p>}
          {histories.map((history, index) => (
            <BookingItem booking={history} key={index} />
          ))}
        </>
      )}
    </div>
  )
}

export default History
