import React, { Component } from "react"

import SignIn from "./SignIn"

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
    this.showSignInModal = this.showSignInModal.bind(this)
    this.showSignUpModal = this.showSignUpModal.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  showSignInModal() {
    this.setState({
      isSignInActive: true
    })
  }

  showSignUpModal() {
    this.setState({
      isSignUpActive: true
    })
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

        {!this.props.userState.username && this.props.userState.isGuest && (
          <>
            <div className="header__btns">
              <button className="header__btn" onClick={this.showSignInModal}>
                Sign In
              </button>
              <button className="header__btn" onClick={this.showSignUpModal}>
                Sign Up
              </button>
            </div>

            <SignIn isSignInActive={this.state.isSignInActive} handleSignInOfApp={this.props.handleSignInOfApp} />

            <div className={ `modal modal--signup ${this.state.isSignUpActive ? 'show': ''}` }>
              <div className="modal__content">
                <h3 className="modal__heading">Sign up</h3>
                <form className="modal__form">
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" id="fullname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                  </div>
                  <button className="modal__submit" type="submit">Sign up</button>
                </form>
              </div>
            </div>
          </>
        )}        

        </header>               
    )
  }
}

export default Header