import React, { Component } from 'react'
import Home from './pages/Home'


class App extends Component {
  constructor(props) {
    super(props)

    const username = localStorage.getItem('username')
    let isGuest = true
    if (username) {
      isGuest = false
    }

    this.state = {
      username: username,
      isGuest: isGuest,      
    }

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleSignIn(username, password) {
    if (username && password) {
      this.setState({
        username: username,
        isGuest: false
      })

      localStorage.setItem('username', username)
    }    
  }

  handleSignUp(userData) {
    const { fullname, username, email, password, status, gender, address } = userData

    if (username) {
      this.setState({
        username: username,
        isGuest: false
      })

      localStorage.setItem('username', username)
    }
  }

  handleLogOut() {
    this.setState({
      username: null,
      isGuest: true
    })

    localStorage.clear()
  }

  render() {
    return (
      <React.Fragment>
        <Home 
          userState={this.state} 
          handleSignInOfApp={this.handleSignIn} 
          handleSignUpOfApp={this.handleSignUp} 
          handleLogOutOfApp={this.handleLogOut}
        />
      </React.Fragment>
    )
  }  
}

export default App
