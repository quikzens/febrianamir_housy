import { useState, useEffect, useContext } from 'react'
import { useGet } from '../hooks/useGet'
import { UserContext } from '../contexts/UserContext'

import Modal from '../components/Modal/Modal'
import AddAvatar from '../components/form/AddAvatar'
import AddProfileImage from '../components/form/AddProfileImage'
import ChangePassword from '../components/form/ChangePassword'

import './Profile.css'
import profil_icon from '../assets/images/profil-icon.svg'
import email_icon from '../assets/images/email-icon.svg'
import password_icon from '../assets/images/password-icon.svg'
import home_icon from '../assets/images/home-icon.svg'
import gender_icon from '../assets/images/gender-icon.svg'
import phone_icon from '../assets/images/phone-icon.svg'
import location_icon from '../assets/images/location-icon.svg'
import profile_foto from '../assets/images/profile.png'

function Profile() {
  const [user, setUser] = useState(null)
  const [isChangePasswordShow, setIsChangePasswordShow] = useState(false)
  const [isAvatarShow, setAvatarShow] = useState(false)
  const [isProfileShow, setProfileShow] = useState(false)
  const { userState } = useContext(UserContext)
  const { data: dataUser } = useGet('/user')

  const toggleChangePassword = () =>
    setIsChangePasswordShow(!isChangePasswordShow)
  const toggleAvatar = () => setAvatarShow(!isAvatarShow)
  const toggleProfile = () => setProfileShow(!isProfileShow)

  useEffect(() => {
    setUser(dataUser)
    return () => {
      setUser(null)
    }
  }, [dataUser])

  if (!user) return <p>Loading...</p>
  return (
    <>
      <section className='profile'>
        <div className='profile__content'>
          <div className='profile__info'>
            <h3>Personal info</h3>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={profil_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{user.fullname}</h4>
                <p>Full name</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={email_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{user.email}</h4>
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
                      toggleChangePassword()
                    }}
                    style={{
                      color: 'var(--brand-clr)',
                      textDecoration: 'none',
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
                <h4 style={{ textTransform: 'capitalize' }}>{user.listAs}</h4>
                <p>Status</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={gender_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4 style={{ textTransform: 'capitalize' }}>{user.gender}</h4>
                <p>Gender</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={phone_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{user.phone}</h4>
                <p>Mobile phone</p>
              </div>
            </div>
            <div className='profile__info__item'>
              <div className='profile__info__icon'>
                <img src={location_icon} alt='' />
              </div>
              <div className='profile__info__text'>
                <h4>{user.address}</h4>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className='profile__photo'>
            <img src={userState?.profileImage || profile_foto} alt='' />
            <button onClick={toggleProfile}>Change Photo Profile</button>
            <button onClick={toggleAvatar}>Change Avatar</button>
          </div>
        </div>
      </section>
      <Modal
        show={isChangePasswordShow}
        toggle={toggleChangePassword}
        title='Change Password'
      >
        <ChangePassword />
      </Modal>
      <Modal show={isAvatarShow} toggle={toggleAvatar} title='Add Avatar'>
        <AddAvatar />
      </Modal>
      <Modal
        show={isProfileShow}
        toggle={toggleProfile}
        title='Add Profile Image'
      >
        <AddProfileImage />
      </Modal>
    </>
  )
}

export default Profile
