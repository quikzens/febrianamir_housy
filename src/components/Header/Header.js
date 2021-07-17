import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

import Modal from '../Modal/Modal'
import SignIn from '../form/SignIn'
import SignUp from '../form/SignUp'
import UserInfo from '../UserInfo/UserInfo'

import './Header.css'
import logo from '../../assets/images/logo.svg'
import search_icon from '../../assets/images/search-icon.svg'

function SearchBox(props) {
  const { applySearch, searchValue, handleChange } = props

  return (
    <div className='header__search-box'>
      <input type='text' onChange={handleChange} />
      <div
        className='header__search-btn'
        onClick={() => applySearch(searchValue)}
      >
        <img src={search_icon} alt='' />
      </div>
    </div>
  )
}

function Header(props) {
  const { applySearch } = props
  const { handleLogOut, userState } = useContext(UserContext)

  const [searchValue, setSearchValue] = useState('')
  const [isSignInActive, setSignInActive] = useState(false)
  const [isSignUpActive, setSignUpActive] = useState(false)

  const handleChange = (e) => setSearchValue(e.target.value)
  const toggleSignInModal = () => setSignInActive(!isSignInActive)
  const toggleSignUpModal = () => setSignUpActive(!isSignUpActive)

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='' />
      </Link>

      {window.location.pathname === '/' && userState?.listAs !== 'owner' && (
        <SearchBox
          applySearch={applySearch}
          searchValue={searchValue}
          handleChange={handleChange}
        />
      )}

      {/* if user is not login yet */}
      {!userState?.username ? (
        <>
          <div className='header__btns'>
            <button className='header__btn' onClick={toggleSignInModal}>
              Sign In
            </button>
            <button className='header__btn' onClick={toggleSignUpModal}>
              Sign Up
            </button>
          </div>

          <Modal
            show={isSignInActive}
            toggle={toggleSignInModal}
            title='Sign In'
          >
            <SignIn />
          </Modal>

          <Modal
            show={isSignUpActive}
            toggle={toggleSignUpModal}
            title='Sign Up'
          >
            <SignUp />
          </Modal>
        </>
      ) : (
        <UserInfo handleLogOut={handleLogOut} />
      )}
    </header>
  )
}

export default Header
