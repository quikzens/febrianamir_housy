import React, { useState, useContext } from 'react'
import { API, configFormData } from '../../config/api'
import { UserContext } from '../../contexts/UserContext'

import { BsCloudUpload } from 'react-icons/bs'

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
    const { name, files } = e.target

    setForm({
      ...form,
      [name]: files[0],
    })

    const preview = document.querySelectorAll('.preview-file')
    if (files && files[0]) {
      const reader = new FileReader()

      reader.onload = (e) => {
        preview[1].setAttribute('src', e.target.result)
      }

      reader.readAsDataURL(files[0])
    }
  }

  return (
    <>
      {isSuccess ? (
        <p className='modal__text'>Profile image berhasil ditambahkan!</p>
      ) : (
        <>
          <p className='modal__text'>Silahkan memasukkan profile image</p>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <label htmlFor='profile' className='label-file'>
              <BsCloudUpload /> Choose an image
            </label>
            <input
              type='file'
              name='profile'
              id='profile'
              accept='image/*'
              onChange={handleFile}
              className='input-file'
              required
            />
            <img src='' alt='' className='preview-file' />
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
