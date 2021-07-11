import BookingItem from './BookingItem'
// import { useContext, useState } from 'react'
// import { UserContext } from '../../contexts/UserContext'

// import './Modal.css'
import '../pages/Booking.css'

import logo from '../assets/images/logo.svg'
// import close_icon from '../assets/images/close-icon.svg'
// import payment_proof from '../assets/images/payment-proof.png'

function DetailInvo(props) {
  const { transaction } = props

  const handleCancel = (e) => {
    // TODO
  }

  const handleApprove = (e) => {
    // TODO
  }

  return (
    <>
      {/* <div className='booking__content' style={{ border: 0 }}>
        <div className='booking__section'>
          <div className='booking__section__sub'>
            <img src={logo} alt='' className='booking__logo' />
            <h3>House Astina</h3>
            <p style={{ fontWeight: '400' }}>
              Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
              Tangerang Selatang
            </p>
          </div>
          <div className='booking__info'>
            <div>
              <h4 style={{ fontWeight: '900' }}>Check-in</h4>
              <p style={{ fontWeight: '400' }}>30 March 2020</p>
            </div>
            <div>
              <h4 style={{ fontWeight: '900' }}>Check-out</h4>
              <p style={{ fontWeight: '400' }}>30 March 2021</p>
            </div>
            <div>
              <h4 style={{ fontWeight: '900' }}>Amenities</h4>
              <p style={{ fontWeight: '400' }}>Furnished</p>
            </div>
            <div>
              <h4 style={{ fontWeight: '900' }}>Type of Rent</h4>
              <p style={{ fontWeight: '400' }}>Year</p>
            </div>
          </div>
          <div className='booking__payment'>
            <h3>Booking</h3>
            <p style={{ fontWeight: '400' }}>Saturday, 30 March 2020</p>
            <img src={payment_proof} alt='' />
          </div>
        </div>
        <div className='booking__table__container'>
          <table className='booking__table'>
            <tbody>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th></th>
              </tr>
              <tr>
                <td>1</td>
                <td>Radif Ganteng</td>
                <td>Male</td>
                <td>083896833112</td>
                <td className='booking__table__info'>Long time rent:</td>
                <td className='booking__table__info'>1 Year</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='booking__table__info'>Total:</td>
                <td className='booking__table__info booking__table__info__total'>
                  Rp. 3.000.000
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div> */}
      <BookingItem booking={transaction} />
      <div
        className='booking__cta'
        style={{ display: 'flex', gap: '1.5rem', margin: '10px 35px 0 35px' }}
      >
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
      </div>
    </>
  )
}

export default DetailInvo
