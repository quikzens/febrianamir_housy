import { useState } from 'react'
import { API } from '../../config/api'
import { getTimeDifference } from '../../library/time'

import './Modal.css'
import close_icon from '../../assets/images/close-icon.svg'

function Booking(props) {
  const { isShowModalBook, toggleModalBook, typeRent, price, houseId } = props
  const [formValue, setFormValue] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { checkIn, checkOut } = formValue

    const { difference } = getTimeDifference(checkIn, checkOut, typeRent)
    const total = price * difference

    const data = {
      checkIn,
      checkOut,
      total,
      houseId,
    }
    const config = {
      'Content-Type': 'application/json',
    }

    const response = await API.post(`/transaction`, data, config)
    const transaction = response.data
    console.log(transaction)
    toggleModalBook()
  }

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className={`modal modal--book ${isShowModalBook ? 'show' : ''}`}>
      <div className='modal__content'>
        <div className='modal__close'>
          <img src={close_icon} alt='' onClick={toggleModalBook} />
        </div>
        <h3 className='modal__heading'>
          How long you <br /> will stay
        </h3>
        <form className='modal__form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='checkIn'>Check-in</label>
            <input
              type='date'
              name='checkIn'
              id='checkIn'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='checkOut'>Check-out</label>
            <input
              type='date'
              name='checkOut'
              id='checkOut'
              onChange={handleChange}
            />
          </div>
          <button className='modal__submit' type='submit'>
            Order
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking
