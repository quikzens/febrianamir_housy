import React, { useState, useContext } from 'react'
import { API, configFormData } from '../../config/api'
import { UserContext } from '../../contexts/UserContext'

function AddAvatar() {
  const [form, setForm] = useState({})
  const [isSuccess, setSuccess] = useState(null)
  const { userState, setUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('avatar', form.avatar, form.avatar.name)

    const response = await API.patch(`/user/avatar`, data, configFormData)

    // if error
    if (response.data.status === 'failed') {
      // log the error message that we get from API
      return console.log(`Error: ${response.data.message}`)
    }

    // if success
    const user = response.data.data
    setUser({
      ...userState,
      avatar: user.avatar,
    })
    setSuccess(true)
  }

  const handleFile = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    })
  }

  if (isSuccess) {
    return <p className='modal__text'>Avatar berhasil ditambahkan!</p>
  }

  return (
    <>
      <p className='modal__text'>Silahkan memasukkan avatar</p>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <input
          type='file'
          name='avatar'
          id='avatar'
          accept='image/*'
          onChange={handleFile}
        />
        <button type='submit' className='modal__submit'>
          Tambahkan avatar
        </button>
      </form>
    </>
  )
}

export default AddAvatar
