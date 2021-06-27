import React, { useContext, useState } from "react"

import { UserContext } from "../UserContext"

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import UserInfo from "./UserInfo"
import OwnerInfo from "./OwnerInfo"

import "./Header.css"

import logo from "../assets/images/logo.svg"


const HeaderWithoutSearch = () => {
  const { 
    userState, 
    handleSignInOfApp, 
    handleSignUpOfApp, 
    handleLogOutOfApp 
  } = useContext(UserContext)

  const [state, setState] = useState({
    isSignInActive: false,
    isSignUpActive: false,
  })

  const toggleSignInModal = () => {
    if (state.isSignInActive) {
      setState({
        ...state,
        isSignInActive: false
      })
    } else {
      setState({
        ...state,
        isSignInActive: true
      })
    }    
  }

  const toggleSignUpModal = () => {
    if (state.isSignUpActive) {
      setState({
        ...state,
        isSignUpActive: false
      })
    } else {
      setState({
        ...state,
        isSignUpActive: true
      })
    }  
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="" />

      {/* 
        if user is not login: sign in and sign up button 
        if user is login: user info and dropdown
      */}
      {!userState.username  ? (
        <>
          <div className="header__btns">
            <button className="header__btn" onClick={toggleSignInModal}>
              Sign In
            </button>
            <button className="header__btn" onClick={toggleSignUpModal}>
              Sign Up
            </button>
          </div>

          <SignIn 
            isSignInActive={state.isSignInActive} 
            handleSignInOfApp={handleSignInOfApp} 
            toggleSignInModal={toggleSignInModal} 
          />
          
          <SignUp 
            isSignUpActive={state.isSignUpActive} 
            handleSignUpOfApp={handleSignUpOfApp} 
            toggleSignUpModal={toggleSignUpModal} 
          />
        </>
      ) : (
        <>
          {userState.status === 'owner' ? (
            <OwnerInfo handleLogOutOfApp={handleLogOutOfApp} />
          ) : (
            <UserInfo handleLogOutOfApp={handleLogOutOfApp} />
          )} 
        </>       
      )}           

    </header>               
  )
}

export default HeaderWithoutSearch