import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

import './Modal.css'

import close_icon from '../../assets/images/close-icon.svg'

function SignUp(props) {
  const { handleSignUp } = useContext(UserContext)

  const { isSignUpActive, toggleSignUpModal } = props

  const [formValue, setFormValue] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    status: '',
    gender: '',
    phone: '',
    address: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSignUp(formValue)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  return (
    <div className={`modal modal--signup ${isSignUpActive ? 'show' : ''}`}>
      <div className='modal__content'>
        <button className='modal__close' onClick={toggleSignUpModal}>
          <img src={close_icon} alt='' />
        </button>
        <h3 className='modal__heading'>Sign up</h3>
        <form className='modal__form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='fullname'>Full Name</label>
            <input
              type='text'
              name='fullname'
              id='fullname'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='status'>List As</label>
            <div className='form-select'>
              <select
                value={formValue.status}
                onChange={handleChange}
                name='status'
                className='form-select'
              >
                <option value='-'>-</option>
                <option value='tenant'>Tenant</option>
                <option value='owner'>Owner</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='gender'>Gender</label>
            <div className='form-select'>
              <select
                value={formValue.gender}
                onChange={handleChange}
                name='gender'
                className='form-select'
              >
                <option value='-'>-</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              name='phone'
              id='phone'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <textarea
              name='address'
              id='address'
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className='modal__submit' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
