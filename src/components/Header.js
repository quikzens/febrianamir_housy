import React, { Component } from "react"

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import UserInfo from "./UserInfo"

import "./Header.css"

import logo from "../assets/images/logo.svg"
import search_icon from "../assets/images/search-icon.svg"


const SearchBox = (props) => {
  const { applySearch, searchValue, handleChange } = props

  return (
    <div className="header__search-box">
      <input type="text" onChange={handleChange} />
      <div className="header__search-btn" onClick={() => applySearch(searchValue)}>
        <img src={search_icon} alt="" />
      </div>
    </div>
  )
}

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      isSignInActive: false,
      isSignUpActive: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.toggleSignInModal = this.toggleSignInModal.bind(this)
    this.toggleSignUpModal = this.toggleSignUpModal.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  toggleSignInModal() {
    if (this.state.isSignInActive) {
      this.setState({
        isSignInActive: false
      })
    } else {
      this.setState({
        isSignInActive: true
      })
    }    
  }

  toggleSignUpModal() {
    if (this.state.isSignUpActive) {
      this.setState({
        isSignUpActive: false
      })
    } else {
      this.setState({
        isSignUpActive: true
      })
    }  
  }

  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="" />

        <SearchBox 
          applySearch={this.props.applySearch} 
          searchValue={this.state.searchValue} 
          handleChange={this.handleChange} 
        />

        {/* if user is not login yet */}
        {!this.props.userState.username && this.props.userState.isGuest && (
          <>
            <div className="header__btns">
              <button className="header__btn" onClick={this.toggleSignInModal}>
                Sign In
              </button>
              <button className="header__btn" onClick={this.toggleSignUpModal}>
                Sign Up
              </button>
            </div>

            <SignIn 
              isSignInActive={this.state.isSignInActive} 
              handleSignInOfApp={this.props.handleSignInOfApp} toggleSignInModal={this.toggleSignInModal} 
            />
            
            <SignUp 
              isSignUpActive={this.state.isSignUpActive} 
              handleSignUpOfApp={this.props.handleSignUpOfApp} toggleSignUpModal={this.toggleSignUpModal} 
            />
          </>
        )}     

        {/* if user has been login */}
        {this.props.userState.username && !this.props.userState.isGuest && (
          <UserInfo handleLogOutOfApp={this.props.handleLogOutOfApp} />
        )}

        </header>               
    )
  }
}

export default Header