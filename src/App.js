import React, { Component } from 'react'
import Home from './pages/Home'


class App extends Component {
  constructor(props) {
    super(props)

    const username = localStorage.getItem('username')
    let isGuest = true
    if (localStorage.getItem('isGuest') !== null) {
      isGuest = localStorage.getItem('isGuest')
    }

    this.state = {
      username: username,
      isGuest: isGuest,      
    }

    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleSignIn(username, password) {
    this.setState({
      username: username,
      isGuest: false
    })

    localStorage.setItem('username', username)
    localStorage.setItem('isGuest', false)
    console.log('oke')
  }

  render() {
    return (
      <React.Fragment>
        <Home userState={this.state} handleSignInOfApp={this.handleSignIn} />
      </React.Fragment>
    )
  }  
}

export default App
