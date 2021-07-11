import Header from '../components/Header'

import './Booking.css'
import qr_code from '../assets/images/qr-code.svg'
import logo from '../assets/images/logo.svg'

function History() {
  return (
    <>
      <Header isWithSearch={false} />
      <div className='booking'>
        <div className='booking__item approve'>
          <div className='booking__content'>
            <div className='booking__section'>
              <div className='booking__section__sub'>
                <img src={logo} alt='' className='booking__logo' />
                <h3>House Astina</h3>
                <p>
                  Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
                  Tangerang Selatang
                </p>
                <div className={`booking__status`}>Approve</div>
              </div>
              <div className='booking__info'>
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
              <div className='booking__payment'>
                <h3>Booking</h3>
                <p>Saturday, 30 March 2020</p>
                <img src={qr_code} alt='' style={{ border: '0' }} />
                <p
                  style={{
                    marginTop: '0.5rem',
                    color: 'black',
                    fontWeight: '300',
                  }}
                >
                  TCK0101
                </p>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default History
