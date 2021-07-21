import { createContext, useState, useEffect } from 'react'
import { API, configJSON, setAuthToken } from '../config/api'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const handleSignIn = async (username, password) => {
    const data = {
      username,
      password,
    }

    const response = await API.post('/signin', data, configJSON)

    if (response.data.status === 'failed') {
      return {
        error: response.data.message,
      }
    }

    const userData = response.data.data

    if (userData) {
      setUser({ ...userData })
      setAuthToken(userData.token)
      localStorage.setItem('user', JSON.stringify(userData))
      window.location.href = '/'
    }
  }

  const handleSignUp = async (data) => {
    const response = await API.post('/signup', data, configJSON)

    if (response.data.status === 'failed') {
      return {
        error: response.data.message,
      }
    }
    const userData = response.data.data

    if (userData.username) {
      setUser({ ...userData })
      setAuthToken(userData.token)
      localStorage.setItem('user', JSON.stringify(userData))
      window.location.href = '/'
    }
  }

  const handleLogOut = () => {
    // bersihkan state, localstorage, dan token
    // redirect ke halaman home
    setUser(null)
    localStorage.clear()
    setAuthToken()
    window.location.href = '/'
  }

  useEffect(() => {
    // get username (if exists)
    const userData = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null

    // get token (if exists)
    if (userData) {
      if (userData.token) {
        setAuthToken(userData.token)
      }
      setUser({ ...userData })
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        userState: user,
        setUser,
        handleSignIn,
        handleSignUp,
        handleLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
