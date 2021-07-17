import BookingItem from './BookingItem'
import { useState } from 'react'
import { API, configJSON } from '../config/api'

import '../pages/Booking.css'

function DetailInvo(props) {
  const { transaction, updateTransactions } = props
  const [action, setAction] = useState(null)

  const handleCancel = async (e) => {
    const response = await API.patch(
      `/order/${transaction.id}`,
      { status: 'Cancel' },
      configJSON
    )

    if (response.data.status === 'failed') {
      console.log('Maaf, terjadi error')
    }

    setAction('Canceled!')
    updateTransactions()
  }

  const handleApprove = async (e) => {
    const response = await API.patch(
      `/order/${transaction.id}`,
      { status: 'Approve' },
      configJSON
    )

    if (response.data.status === 'failed') {
      return console.log('Ups, terjadi error')
    }

    setAction('Approved!')
    updateTransactions()
  }

  return (
    <>
      <BookingItem booking={transaction} />
      {transaction.status === 'Waiting Approve' && (
        <div
          className='booking__cta'
          style={{ display: 'flex', gap: '1.5rem', margin: '10px 35px 0 35px' }}
        >
          {!action ? (
            <>
              <button
                onClick={handleCancel}
                style={{
                  padding: '8px 1rem',
                  borderRadius: '5px',
                  fontWeight: '900',
                  backgroundColor: '#ff0742',
                  color: 'white',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleApprove}
                style={{
                  padding: '8px 1rem',
                  borderRadius: '5px',
                  fontWeight: '900',
                  backgroundColor: '#0acf83',
                  color: 'white',
                }}
              >
                Approve
              </button>
            </>
          ) : (
            <p>{action}</p>
          )}
        </div>
      )}
    </>
  )
}

export default DetailInvo
