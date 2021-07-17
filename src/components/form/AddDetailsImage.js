import React, { useState } from 'react'
import { API, configFormData } from '../../config/api'

function AddDetailsImage({ id, updateHouse }) {
  const [form, setForm] = useState({})
  const [isSuccess, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    Array.from(form.details).forEach((image) => {
      data.append('details', image, image.name)
    })

    const response = await API.post(`/images/${id}`, data, configFormData)

    // // if error
    if (response.data.status === 'failed') {
      // log the error message that we get from API
      return console.log(`Error: ${response.data.message}`)
    }

    // // if success
    updateHouse()
    setSuccess(true)
  }

  const handleFile = (e) => {
    const { name, files } = e.target

    setForm({
      ...form,
      [name]: files,
    })
  }

  if (isSuccess) {
    return <p className='modal__text'>Detail Images berhasil ditambahkan!</p>
  }

  return (
    <>
      <p className='modal__text'>Silahkan masukkan gambar, maksimal 3 ya...</p>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <input
          type='file'
          name='details'
          id='details'
          accept='image/*'
          onChange={handleFile}
          multiple
        />
        <button type='submit' className='modal__submit'>
          Add detail images
        </button>
      </form>
    </>
  )
}

export default AddDetailsImage
