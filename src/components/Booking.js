import { useState } from 'react'

import "./Modal.css"

import close_icon from '../assets/images/close-icon.svg'


const Booking = (props) => {
  const { 
    isShowModalBook, 
    toggleModalBook
  } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO
  }

  const handleChange = (e) => {
    // TODO
  }

  return (
    <div className={ `modal modal--book ${isShowModalBook ? 'show': ''}` }>
      <div className="modal__content">
        <div className="modal__close">
          <img src={close_icon} alt="" onClick={toggleModalBook} />
        </div>
        <h3 className="modal__heading">
          How long you <br /> will stay
        </h3>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="checkin">Check-in</label>
            <input type="date" name="checkin" id="checkin" />
          </div>
          <div className="form-group">
            <label htmlFor="checkout">Check-out</label>
            <input type="date" name="checkout" id="checkout" />
          </div>
          <button className="modal__submit" type="submit">
            Order
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking