import { useState } from "react"
import HeaderWithoutSearch from "../components/HeaderWithoutSearch"

import './Booking.css'
import payment_proof from '../assets/images/payment-proof.png'
import logo from '../assets/images/logo.svg'

const Booking = () => {
  const [bookingStatus, setBookingStatus] = useState('waiting-payment')
  const [bookingStatusContent, setBookingStatusContent] = useState('Waiting Payment')

  return (
    <>
      <HeaderWithoutSearch />
      <div class="booking">
        <div class="booking__item">
          <div class="booking__content">
            <div>
              <div>
                <img src={logo} alt="" class="booking__logo" />
                <h3>House Astina</h3>
                <p>
                  Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren, Tangerang Selatang
                </p>
                <div class={`booking__status ${bookingStatus}`}>
                  {bookingStatusContent}
                </div>
              </div>
              <div class="booking__info">
                <div>
                  <h4>Check-in</h4>
                  <p>30 March 2020</p>
                </div>
                <div>
                  <h4>Check-out</h4>
                  <p>30 March 2021</p>
                </div>
                <div>
                  <h4>Amenities</h4>
                  <p>Furnished</p>
                </div>
                <div>
                  <h4>Type of Rent</h4>
                  <p>Year</p>
                </div>
              </div>
            </div>        
            <div class="booking__payment">
              <h3>Booking</h3>
              <p>Saturday, 30 March 2020</p>
              <img src={payment_proof} alt="" />
            </div>
          </div>
          <div class="booking__table">
            <div class="booking__table__no">

            </div>
          </div>
        </div>
        <div class="booking__cta">
          <button onClick={() => {
            setBookingStatus('waiting-approve')
            setBookingStatusContent('Waiting Approve')
            setTimeout(() => {
              setBookingStatus('approve')
              setBookingStatusContent('Approve')
            }, 3000)
          }}>PAY</button>
        </div>
      </div>
    </>
  )
}

export default Booking