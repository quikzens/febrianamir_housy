import React, { Component } from "react"

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import UserInfo from "./UserInfo"

import "./Header.css"
import "./Modal.css"

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

        {/* not login */}
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
            <SignUp isSignUpActive={this.state.isSignUpActive} handleSignUpOfApp={this.props.handleSignUpOfApp} />
          </>
        )}     

        {/* login */}
        {this.props.userState.username && !this.props.userState.isGuest && (
          <UserInfo handleLogOutOfApp={this.props.handleLogOutOfApp} />
        )}

        </header>               
    )
  }
}

export default Header