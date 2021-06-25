import React, { Component } from "react"
import Main from "../components/Main"

import { rooms } from "../data/rooms"


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Main rooms={rooms} handleSignInOfApp={this.props.handleSignInOfApp} userState={this.props.userState} />
      </React.Fragment>
    )
  }
}

export default Home