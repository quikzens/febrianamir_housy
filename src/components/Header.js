import React, { Component, useState } from "react"

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
      searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
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
        <div className="header__btns">
          <button className="header__btn">
            Sign In
          </button>
          <button className="header__btn">
            Sign Up
          </button>
        </div>
      </header>        
    )
  }
}

export default Header