import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

function SignIn() {
  const { handleSignIn } = useContext(UserContext)
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = form
    const { error } = await handleSignIn(username, password)
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
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          value={form.username}
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
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button className='modal__submit' type='submit'>
        Sign in
      </button>
    </form>
  )
}

export default SignIn
