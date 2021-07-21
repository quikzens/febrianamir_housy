import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

function SignUp() {
  const { handleSignUp } = useContext(UserContext)
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    listAs: '',
    gender: '',
    phone: '',
    address: '',
  })
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await handleSignUp(form)
    if (error) setError(error)
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
      {error && (
        <div className='modal__alert'>
          <p>{error}</p>
        </div>
      )}
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
        <label htmlFor='listAs'>List As</label>
        <div className='form-select'>
          <select
            value={form.listAs}
            onChange={handleChange}
            name='listAs'
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
            value={form.gender}
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
  )
}

export default SignUp
