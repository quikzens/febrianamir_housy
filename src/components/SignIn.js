import { useContext, useState } from "react"
import { UserContext } from '../UserContext'

import "./Modal.css"

import close_icon from "../assets/images/close-icon.svg"


const SignIn = (props) => {
  const { handleSignInOfApp } = useContext(UserContext)
  
  const { 
    isSignInActive, 
    toggleSignInModal 
  } = props 

  const [formValue, setFormValue] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = formValue
    handleSignInOfApp(username, password)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  return (
    <div className={ `modal modal--signin ${isSignInActive ? 'show': ''}` }>
      <div className="modal__content">
        <button className="modal__close" onClick={toggleSignInModal}>
          <img src={close_icon} alt="" />
        </button>
        <h3 className="modal__heading">
          Sign in
        </h3>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={formValue.username} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={formValue.password} onChange={handleChange} />
          </div>
          <button className="modal__submit" type="submit">Sign in</button>
        </form>
        <p className="modal__info">
          Don't have an account? Klik <a href="/">Here</a>
        </p>
      </div>
    </div>
  )
}

export default SignIn