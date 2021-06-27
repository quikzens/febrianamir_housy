import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'

import './Modal.css'
import '../pages/Booking.css'

import logo from '../assets/images/logo.svg'
import close_icon from '../assets/images/close-icon.svg'
import payment_proof from '../assets/images/payment-proof.png'


const DetailInvo = (props) => {  
  const { 
    isModalShow, 
    toggleModal 
  } = props 

  const handleCancel = (e) => {
    // TODO
  }

  const handleApprove = (e) => {
    // TODO
  }

  return (
    <div className={ `modal modal--invo ${isModalShow ? 'show': ''}` }>
      <div className="modal__content" style={{ padding: '3rem 0' }}>
        <button className="modal__close" onClick={toggleModal}>
          <img src={close_icon} alt="" />
        </button>
        <div class="booking__content" style={{ border: 0 }}>
          <div>
            <div>
              <img src={logo} alt="" class="booking__logo" />
              <h3>House Astina</h3>
              <p style={{ fontWeight: '400' }}>
                Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren, Tangerang Selatang
              </p>
            </div>
            <div class="booking__info">
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
          </div>        
          <div class="booking__payment">
            <h3>Booking</h3>
            <p style={{ fontWeight: '400' }}>Saturday, 30 March 2020</p>
            <img src={payment_proof} alt="" />
          </div>
        </div>
        <div class="booking__table">
          <div class="booking__table__no">

          </div>
        </div>
        <div className="booking__cta" style={{ display: 'flex', gap: '1.5rem', margin: '10px 35px 0 35px' }}>
          <button 
            onClick={handleCancel} 
            style={{ 
              padding: '8px 1rem',
              borderRadius: '5px',
              fontWeight: '900',
              backgroundColor: '#ff0742',
              color: 'white'
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
              color: 'white'
            }}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailInvo