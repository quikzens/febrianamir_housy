import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from './UserContext'

import Home from './pages/Home'
import DetailProperty from './pages/DetailProperty'
import Profile from './pages/Profile'
import Booking from './pages/Booking'

import { users } from './data/users'



class App extends Component {
  constructor(props) {
    super(props)

    const fullname = localStorage.getItem('fullname')
    const username = localStorage.getItem('username')
    const email = localStorage.getItem('email')
    const status = localStorage.getItem('status')
    const gender = localStorage.getItem('gender')
    const address = localStorage.getItem('address')
    const phone = localStorage.getItem('phone')

    this.state = {
      fullname,
      username,  
      email,  
      status,  
      gender,  
      address, 
      phone
    }

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleSignIn(username, password) {
    if (username && password) {
      const userData = users.find((user) => (
        user.username === username && 
        user.password === password
      ))

      if (userData) {
        this.setState({
          fullname: userData.fullname, 
          username: userData.username, 
          email: userData.email, 
          status: userData.status, 
          gender: userData.gender, 
          address: userData.address, 
          phone: userData.phone
        })
  
        localStorage.setItem('fullname', userData.fullname)
        localStorage.setItem('username', userData.username)
        localStorage.setItem('email', userData.email)
        localStorage.setItem('status', userData.status)
        localStorage.setItem('gender', userData.gender)
        localStorage.setItem('address', userData.address)
        localStorage.setItem('phone', userData.phone)
      }
    }    
  }

  handleSignUp(userData) {
    const { 
      fullname, 
      username, 
      email, 
      password, 
      status, 
      gender, 
      address 
    } = userData

    if (username) {
      this.setState({
        username: username,
      })

      localStorage.setItem('fullname', fullname)
      localStorage.setItem('username', username)
      localStorage.setItem('email', email)
      localStorage.setItem('status', status)
      localStorage.setItem('gender', gender)
      localStorage.setItem('address', address)
    }
  }

  handleLogOut() {
    this.setState({
      username: null,
    })

    localStorage.clear()
    window.location.href = '/'
  }

  render() {
    return (
      <React.Fragment>
        <UserContext.Provider
          value={{
            userState: this.state,
            handleSignInOfApp: this.handleSignIn,
            handleSignUpOfApp: this.handleSignUp,
            handleLogOutOfApp: this.handleLogOut,
          }}
        >
          <Router>
            <Switch>
              <Route exact path="/">
                <Home
                  userState={this.state} 
                  handleSignInOfApp={this.handleSignIn} 
                  handleSignUpOfApp={this.handleSignUp} 
                  handleLogOutOfApp={this.handleLogOut}
                />
              </Route>
              <Route path="/booking/">
                <Booking />
              </Route>
              <Route path="/profile/:username" children={<Profile />}></Route>
              <Route path="/detail/:id">
                <DetailProperty />
              </Route>
              <Route path="*">
                <h1>Sorry, this page doesn't exist</h1>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </React.Fragment>
    )
  }  
}

export default App
