import { useState } from 'react'
import { API } from '../../config/api'

import './Modal.css'
import close_icon from '../../assets/images/close-icon.svg'

function ChangePassword(props) {
  const { isModalShow, toggleModal } = props

  const [formValue, setFormValue] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { oldPassword, confirmPassword, newPassword } = formValue
    console.log(oldPassword, confirmPassword)
    // is old and confirm password is the same?
    if (oldPassword !== confirmPassword) {
      return console.log(`oldPassword dan confirmPassword tidak sama`)
    }

    const data = {
      oldPassword,
      newPassword,
    }
    const config = {
      'Content-Type': 'application/json',
    }

    const response = await API.patch('/user/changepassword', data, config)
    if (response.data.status === 'success') {
      console.log('password berhasil diubah')
      toggleModal()
    }
  }

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div
      className={`modal modal--change-password ${isModalShow ? 'show' : ''}`}
    >
      <div className='modal__content'>
        <div className='modal__close' onClick={toggleModal}>
          <img src={close_icon} alt='' />
        </div>
        <h3 className='modal__heading'>Change Password</h3>
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
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
