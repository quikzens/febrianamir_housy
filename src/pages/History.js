import HeaderWithoutSearch from "../components/HeaderWithoutSearch"

import './Booking.css'
import qr_code from '../assets/images/qr-code.svg'
import logo from '../assets/images/logo.svg'

const History = () => {
  return (
    <>
      <HeaderWithoutSearch />
      <div className="booking">
        <div className="booking__item">
          <div className="booking__content">
            <div className="booking__section">
              <div className="booking__section__sub">
                <img src={logo} alt="" className="booking__logo" />
                <h3>House Astina</h3>
                <p>
                  Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren, Tangerang Selatang
                </p>
                <div className={`booking__status approve`}>
                  Approve
                </div>
              </div>
              <div className="booking__info">
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
              <div className="booking__payment">
                <h3>Booking</h3>
                <p>Saturday, 30 March 2020</p>
                <img src={qr_code} alt="" style={{ border: '0' }}/>
                <p style={{ marginTop: '0.5rem', color: 'black', fontWeight: '300' }}>TCK0101</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default History