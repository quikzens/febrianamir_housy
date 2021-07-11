import React, { useState } from 'react'
import Modal from './Modal/Modal'
import AddAttachment from './form/AddAttachment'

import { getTimeDifference, printDate } from '../library/time'
import logo from '../assets/images/logo.svg'

function BookingItem(props) {
  const { booking } = props
  const { id, status, checkIn, checkOut, total, house, user, attachment } =
    booking
  const { difference, differenceType } = getTimeDifference(
    checkIn,
    checkOut,
    house.typeRent
  )
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(!showModal)

  return (
    <React.Fragment key={id}>
      <div
        className={`booking__item ${status.replace(' ', '-').toLowerCase()}`}
      >
        <div className='booking__content'>
          <div className='booking__section'>
            <div className='booking__section__sub'>
              <img src={logo} alt='' className='booking__logo' />
              <h3>{house.name}</h3>
              <p>{house.address}</p>
              <div className='booking__status'>{status}</div>
            </div>
            <div className='booking__info'>
              <div>
                <h4>Check-in</h4>
                <p>{printDate(checkIn)}</p>
              </div>
              <div>
                <h4>Amenities</h4>
                {house.amenities.map((amenity, index) => (
                  <p key={index}>{amenity}</p>
                ))}
              </div>
              <div>
                <h4>Check-out</h4>
                <p>{printDate(checkOut)}</p>
              </div>
              <div>
                <h4>Type of Rent</h4>
                <p
                  style={{
                    textTransform: 'capitalize',
                  }}
                >
                  {house.typeRent}
                </p>
              </div>
            </div>
            <div className='booking__payment'>
              <h3>Booking</h3>
              <p>{printDate(checkIn, true)}</p>
              <img src={attachment} alt='' />
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
                  <td>{user.id}</td>
                  <td>{user.fullname}</td>
                  <td className='text-capitalize'>{user.gender}</td>
                  <td>{user.phone}</td>
                  <td className='booking__table__info'>Long time rent:</td>
                  <td className='booking__table__info text-capitalize'>
                    {difference} {differenceType}
                  </td>
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
                    Rp.{' '}
                    {new Intl.NumberFormat(['ban', 'id']).format(
                      total.toString()
                    )}{' '}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {status === 'Waiting Payment' && (
          <>
            <div className='booking__cta'>
              <button onClick={toggleModal}>PAY</button>
            </div>
            <Modal show={showModal} toggle={toggleModal} title='Add attachment'>
              <AddAttachment id={id} />
            </Modal>
          </>
        )}
      </div>
    </React.Fragment>
  )
}

export default BookingItem
