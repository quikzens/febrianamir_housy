import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { UserContext } from '../contexts/UserContext'
import { useGet } from '../hooks/useGet'

import Modal from '../components/Modal/Modal'
import AddTransaction from '../components/form/AddTransaction'
import AddDetailsImage from '../components/form/AddDetailsImage'

import './DetailProperty.css'
import bed_icon from '../assets/images/bed-icon.svg'
import bath_icon from '../assets/images/bath-icon.svg'

function DetailProperty() {
  const { id } = useParams()
  const [isShowModalBook, setShowModalBook] = useState(false)
  const [isShowAddDetails, setShowAddDetails] = useState(false)
  const [house, setHouse] = useState(null)
  const { userState } = useContext(UserContext)
  const { data: dataHouse, invoke: updateHouse } = useGet(`/house/${id}`)

  const toggleModalBook = () => setShowModalBook(!isShowModalBook)
  const toggleAddDetails = () => setShowAddDetails(!isShowAddDetails)

  useEffect(() => {
    setHouse(dataHouse)
    return () => {
      setHouse(null)
    }
  }, [dataHouse])

  if (!house) return <p>Loading...</p>
  return (
    <>
      <div className='detailproperty'>
        <div className='detailproperty__images'>
          <div className='detailproperty__image'>
            <img src={house.image} alt='' />
          </div>
          {/* detail images */}
          {house.detailImages?.length !== 0 && (
            <div className='detailproperty__details'>
              {house.detailImages?.map((image) => (
                <div key={image.id} className='detailproperty__details-image'>
                  <img src={image.url} alt='' />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='detailproperty__content'>
          <h1 className='detailproperty__title'>{house.name}</h1>
          <div className='detailproperty__info'>
            <div>
              <div className='detailproperty__price'>
                Rp.
                {new Intl.NumberFormat(['ban', 'id']).format(
                  house.price?.toString()
                )}{' '}
                /{' '}
                {house.typeRent?.charAt(0).toUpperCase() +
                  house.typeRent?.slice(1)}
              </div>
              <div className='detailproperty__address'>{house.address}</div>
            </div>
            <div className='detailproperty__features'>
              <div className='detailproperty__feature'>
                <p>Bedrooms</p>
                <div>
                  {house.bedroom}
                  <img src={bed_icon} alt='' />
                </div>
              </div>
              <div className='detailproperty__feature'>
                <p>Bathrooms</p>
                <div>
                  {house.bathroom}
                  <img src={bath_icon} alt='' />
                </div>
              </div>
              <div className='detailproperty__feature'>
                <p>Area</p>
                <div>{house.area} sqft</div>
              </div>
            </div>
          </div>
          <div className='detailproperty__description'>
            <h3>Description</h3>
            <p>{house.description}</p>
          </div>
          {userState?.listAs === 'tenant' && (
            <div className='detailproperty__cta'>
              <button type='button' onClick={toggleModalBook}>
                book now
              </button>
            </div>
          )}
          {userState?.listAs === 'owner' && (
            <div className='detailproperty__cta'>
              <button type='button' onClick={toggleAddDetails}>
                add detail images
              </button>
            </div>
          )}
        </div>
      </div>
      {userState?.listAs === 'tenant' ? (
        <Modal
          show={isShowModalBook}
          toggle={toggleModalBook}
          title='How long you will stay'
        >
          <AddTransaction
            typeRent={house.typeRent}
            price={house.price}
            houseId={house.id}
          />
        </Modal>
      ) : (
        <Modal
          show={isShowAddDetails}
          toggle={toggleAddDetails}
          title='Add Detail Images'
        >
          <AddDetailsImage id={id} updateHouse={updateHouse} />
        </Modal>
      )}
    </>
  )
}

export default DetailProperty
