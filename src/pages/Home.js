import React, { Component } from "react"
import Main from "../components/Main"

import { homes } from "../data/homes"


class Home extends Component {
  render() {
    return (
      <Main 
        rooms={homes} 
        handleSignInOfApp={this.props.handleSignInOfApp} 
        handleSignUpOfApp={this.props.handleSignUpOfApp} 
        handleLogOutOfApp={this.props.handleLogOutOfApp} 
        userState={this.props.userState} 
      />
    )
  }
}

export default Home