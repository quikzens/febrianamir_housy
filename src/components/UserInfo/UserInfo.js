import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

import avatar from '../../assets/images/avatar.png'
import user_icon from '../../assets/images/user-icon.svg'
import calendar_icon from '../../assets/images/calendar-icon-2.svg'
import bill_icon from '../../assets/images/bill-icon.svg'
import cabin_icon from '../../assets/images/cabin-icon.svg'
import logout_icon from '../../assets/images/logout-icon.svg'

import './UserInfo.css'

function UserInfo(props) {
  const { userState } = useContext(UserContext)
  const { handleLogOut } = props
  const [show, setShow] = useState(false)

  const toggleDropdown = () => setShow(!show)

  const handleLogout = (e) => {
    e.preventDefault()
    handleLogOut()
  }

  return (
    <div className='user-info'>
      <div className='user-info__avatar' onClick={toggleDropdown}>
        <img src={userState.avatar ? userState.avatar : avatar} alt='' />
      </div>
      <div className={`user-info__dropdown ${show ? 'show' : ''}`}>
        <Link
          className='user-info__dropdown__item'
          to={`/profile/${userState.username}`}
        >
          <img src={user_icon} alt='' />
          <p>Profile</p>
        </Link>
        {userState.listAs === 'owner' && (
          <Link className='user-info__dropdown__item' to='/myhouses'>
            <img src={cabin_icon} alt='' />
            <p>My Houses</p>
          </Link>
        )}
        {userState.listAs === 'tenant' ? (
          <Link className='user-info__dropdown__item' to='/booking'>
            <img src={calendar_icon} alt='' />
            <p>My Booking</p>
          </Link>
        ) : (
          <Link className='user-info__dropdown__item' to='/addproperty'>
            <img src={cabin_icon} alt='' />
            <p>Add Property</p>
          </Link>
        )}
        <Link className='user-info__dropdown__item' to='/history'>
          <img src={bill_icon} alt='' />
          <p>History</p>
        </Link>
        <hr />
        <a
          className='user-info__dropdown__item'
          href='/'
          onClick={handleLogout}
        >
          <img src={logout_icon} alt='' />
          <p>Logout</p>
        </a>
      </div>
    </div>
  )
}

export default UserInfo
