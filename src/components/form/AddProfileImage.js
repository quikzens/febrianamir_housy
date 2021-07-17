import React, { useState, useContext } from 'react'
import { API, configFormData } from '../../config/api'
import { UserContext } from '../../contexts/UserContext'

function AddProfileImage() {
  const [form, setForm] = useState({})
  const [isSuccess, setSuccess] = useState(null)
  const { userState, setUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('profile', form.profile, form.profile.name)

    const response = await API.patch(`/user/profile`, data, configFormData)

    // if error
    if (response.data.status === 'failed') {
      // log the error message that we get from API
      return console.log(`Error: ${response.data.message}`)
    }

    // if success
    const user = response.data.data
    setUser({
      ...userState,
      profileImage: user.profileImage,
    })
    setSuccess(true)
  }

  const handleFile = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    })
  }

  return (
    <>
      {isSuccess ? (
        <p className='modal__text'>Profile image berhasil ditambahkan!</p>
      ) : (
        <>
          <p className='modal__text'>Silahkan memasukkan profile image</p>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input
              type='file'
              name='profile'
              id='profile'
              accept='image/*'
              onChange={handleFile}
            />
            <button type='submit' className='modal__submit'>
              Tambahkan profile image
            </button>
          </form>
        </>
      )}
    </>
  )
}

export default AddProfileImage
