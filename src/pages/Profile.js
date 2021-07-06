import { useState, useContext } from 'react'
import Header from '../components/Header'
import { UserContext } from '../UserContext'

import ChangePassword from '../components/Modal/ChangePassword'

import './Profile.css'
import profil_icon from '../assets/images/profil-icon.svg'
import email_icon from '../assets/images/email-icon.svg'
import password_icon from '../assets/images/password-icon.svg'
import home_icon from '../assets/images/home-icon.svg'
import gender_icon from '../assets/images/gender-icon.svg'
import phone_icon from '../assets/images/phone-icon.svg'
import location_icon from '../assets/images/location-icon.svg'
import profile_foto from '../assets/images/profil-1.jpg'

const Profile = () => {
  const { userState } = useContext(UserContext)
  const { fullname, email, status, gender, phone, address } = userState

  const [isModalShow, setIsModalShow] = useState(false)

  const toggleModal = () => setIsModalShow(!isModalShow)

  return (
    <>
      <Header isWithSearch={false} />
      <section className='profile'>
        <div className='profile__content'>
          <div className='profile__info'>
            <h3>Personal info</h3>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={profil_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{fullname}</h4>
                <p>Full name</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={email_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{email}</h4>
                <p>Email</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={password_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>
                  <a
                    href='/'
                    onClick={(e) => {
                      e.preventDefault()
                      toggleModal()
                    }}
                  >
                    Change Password
                  </a>
                </h4>
                <p>Password</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={home_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{status}</h4>
                <p>Status</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={gender_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{gender}</h4>
                <p>Gender</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={phone_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{phone}</h4>
                <p>Mobile phone</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={location_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{address}</h4>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className='profile__photo'>
            <img src={profile_foto} alt='' />
            <button>Change Photo Profile</button>
          </div>
        </div>
      </section>
      <ChangePassword isModalShow={isModalShow} toggleModal={toggleModal} />
    </>
  )
}

export default Profile
