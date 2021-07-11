import React, { useState } from 'react'

import { API } from '../../config/api'

function AddAttachment(props) {
  const { id } = props
  const [form, setForm] = useState({})
  const [isSuccess, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    const data = new FormData()
    data.append('attachment', form.attachment, form.attachment.name)

    const response = await API.patch(`/order/addattachment/${id}`, data, config)

    // if error
    if (response.data.status === 'failed') {
      // log the error message that we get from API
      return console.log(`Error: ${response.data.message}`)
    }

    // if success
    setSuccess(true)
    const transactionData = response.data.data
    console.log(transactionData)
    console.log('Yes, payment proof berhasil ditambahkan!')
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
        <p className='modal__text'>
          Bukti pembayaran berhasil ditambahkan! Silahkan tunggu 1x24 jam untuk
          konfirmasi pembayaran dan refresh untuk melihat perubahan...
        </p>
      ) : (
        <>
          <p>Silahkan memasukkan bukti pembayaran</p>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input
              type='file'
              name='attachment'
              id='attachment'
              accept='image/*'
              onChange={handleFile}
            />
            <button type='submit' className='modal__submit'>
              Tambahkan payment proof
            </button>
          </form>
        </>
      )}
    </>
  )
}

export default AddAttachment
