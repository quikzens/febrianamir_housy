import React, { useState } from 'react'
import { API, configJSON } from '../../config/api'

function ChangePassword() {
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { oldPassword, confirmPassword, newPassword } = form

    // is old and confirm password is the same?
    if (oldPassword !== confirmPassword) {
      return console.log(`oldPassword dan confirmPassword tidak sama`)
    }

    const data = {
      oldPassword,
      newPassword,
    }

    const response = await API.patch('/user/changepassword', data, configJSON)

    if (response.data.status === 'failed') {
      console.log(response.data.message)
    }

    console.log('password berhasil diubah')
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <form className='modal__form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='oldPassword'>Old Password</label>
        <input
          type='password'
          name='oldPassword'
          id='oldPassword'
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='newPassword'>New Password</label>
        <input
          type='password'
          name='newPassword'
          id='newPassword'
          onChange={handleChange}
          required
        />
      </div>
      <button className='modal__submit' type='submit'>
        Change Password
      </button>
    </form>
  )
}

export default ChangePassword
