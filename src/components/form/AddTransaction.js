import React, { useState } from 'react'
import { API, configJSON } from '../../config/api'
import { getTimeDifference } from '../../library/time'

function AddTransaction(props) {
  const { typeRent, price, houseId } = props
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { checkIn, checkOut } = form

    const { difference } = getTimeDifference(checkIn, checkOut, typeRent)
    const total = price * difference

    const data = {
      checkIn,
      checkOut,
      total,
      houseId,
    }

    const response = await API.post(`/transaction`, data, configJSON)

    if (response.data.status === 'failed') {
      return console.log(response.data.message)
    }

    window.location.href = '/booking'
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
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
  )
}

export default AddTransaction
