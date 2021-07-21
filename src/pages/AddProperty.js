import { useState } from 'react'
import { API, configFormData } from '../config/api'

import Modal from '../components/Modal/Modal'

import './AddProperty.css'
import check_icon from '../assets/images/check.svg'
import { BsCloudUpload } from 'react-icons/bs'

function AddProperty() {
  const [formValue, setFormValue] = useState({
    name: '',
    city: '',
    address: '',
    area: '',
    price: '',
    typeRent: '',
    description: '',
    amenities: [],
    bedroom: '',
    bathroom: '',
  })
  const [isShow, setShow] = useState(false)

  const toggleModal = () => {
    setShow(!isShow)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'amenities') {
      const amenities = formValue.amenities

      if (amenities.indexOf(value) >= 0) {
        amenities.splice(amenities.indexOf(value), 1)
      } else {
        amenities.push(value)
      }

      return setFormValue({
        ...formValue,
        amenities: amenities,
      })
    }

    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  const handleFile = (e) => {
    const { name, files } = e.target

    setFormValue({
      ...formValue,
      [name]: files[0],
    })

    const preview = document.querySelector('.preview-file')
    if (files && files[0]) {
      const reader = new FileReader()

      reader.onload = (e) => {
        preview.setAttribute('src', e.target.result)
      }

      reader.readAsDataURL(files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = formValue
    try {
      const house = new FormData()
      house.append('name', data.name)
      house.append('cityId', data.cityId)
      house.append('address', data.address)
      house.append('area', data.area)
      house.append('price', data.price)
      house.append('typeRent', data.typeRent)
      house.append('amenities', data.amenities.join(','))
      house.append('description', data.description)
      house.append('bedroom', data.bedroom)
      house.append('bathroom', data.bathroom)
      house.append('imageFile', data.imageFile, data.imageFile.name)

      const response = await API.post('/house', house, configFormData)

      // if error
      if (response.data.status === 'failed') {
        // log the error message that we get from API
        return console.log(`Error: ${response.data.message}`)
      }

      // if success
      toggleModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <main className='add-property'>
        <h2>Add Property</h2>
        <form
          method='post'
          className='add-property__form'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
        >
          <div className='add-property__form-group'>
            <label htmlFor='name'>Property Name</label>
            <input
              type='text'
              name='name'
              id='name'
              onChange={handleChange}
              required
            />
          </div>
          <div className='add-property__form-group'>
            <label htmlFor='city'>City</label>
            <div className='form-select'>
              <select name='cityId' id='city' onChange={handleChange}>
                <option value='-'>-</option>
                <option value='1'>Jakarta</option>
                <option value='2'>Makassar</option>
                <option value='3'>Surabaya</option>
              </select>
            </div>
          </div>
          <div className='add-property__form-group'>
            <label htmlFor='address'>Address</label>
            <textarea
              name='address'
              id='address'
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='add-property__form-group'>
            <label htmlFor='area'>Area</label>
            <input
              type='text'
              name='area'
              id='area'
              onChange={handleChange}
              required
            />
          </div>
          <div className='add-property__form-group'>
            <label htmlFor='price'>Price</label>
            <input
              type='text'
              name='price'
              id='price'
              onChange={handleChange}
            />
          </div>
          <div className='add-property__form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              id='description'
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='add-property__form-group'>
            <label htmlFor='typeRent'>Type Rent</label>
            <div className='form-select'>
              <select name='typeRent' id='typeRent' onChange={handleChange}>
                <option value='-'>-</option>
                <option value='day'>Day</option>
                <option value='month'>Month</option>
                <option value='year'>Year</option>
              </select>
            </div>
          </div>
          <div className='add-property__form-group amenities'>
            <label htmlFor='amenities'>Amenities</label>
            <div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='Furnished'
                  name='amenities'
                  value='Furnished'
                  onChange={handleChange}
                />
                <div className='checkbox__control'>
                  <img src={check_icon} alt='' />
                </div>
                <label htmlFor='Furnished'>Furnished</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='Pet Allowed'
                  name='amenities'
                  value='Pet Allowed'
                  onChange={handleChange}
                />
                <div className='checkbox__control'>
                  <img src={check_icon} alt='' />
                </div>
                <label htmlFor='Pet Allowed'>Pet Allowed</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='Shared Accomodation'
                  name='amenities'
                  value='Shared Accomodation'
                  onChange={handleChange}
                />
                <div className='checkbox__control'>
                  <img src={check_icon} alt='' />
                </div>
                <label htmlFor='Shared Accomodation'>Shared Accomodation</label>
              </div>
            </div>
          </div>
          <div className='add-property__form-group'>
            <label htmlFor='bedroom'>Bedroom</label>
            <div className='form-select'>
              <select name='bedroom' id='bedroom' onChange={handleChange}>
                <option value='-'>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
          </div>
          <div className='add-property__form-group'>
            <label htmlFor='bathroom'>Bathroom</label>
            <div className='form-select'>
              <select name='bathroom' id='bathroom' onChange={handleChange}>
                <option value='-'>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
          </div>
          <div className='add-property__form-group'>
            <label>Image</label>
            <label htmlFor='imageFile' className='label-file'>
              <BsCloudUpload /> Choose an image
            </label>
            <input
              type='file'
              name='imageFile'
              id='imageFile'
              accept='image/*'
              className='input-file'
              onChange={handleFile}
              required
            />
            <img src='' alt='' className='preview-file' />
          </div>
          <div className='add-property__submit'>
            <button type='submit'>Add Property</button>
          </div>
        </form>
      </main>
      <Modal show={isShow} toggle={toggleModal}>
        <p>Yes, property berhasil ditambahkan!</p>
      </Modal>
    </>
  )
}

export default AddProperty
