import { useState } from "react"

import close_icon from "../assets/images/close-icon.svg"


const SignUp = (props) => {
  const { 
    isSignUpActive, 
    handleSignUpOfApp, 
    toggleSignUpModal 
  } = props 

  const [formValue, setFormValue] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    status: '',
    gender: '',
    address: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    handleSignUpOfApp(formValue)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  return (
    <div className={ `modal modal--signup ${isSignUpActive ? 'show': ''}` }>
      <div className="modal__content">
        <button className="modal__close" onClick={toggleSignUpModal}>
          <img src={close_icon} alt="" />
        </button>
        <h3 className="modal__heading">Sign up</h3>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="fullname" id="fullname" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="status">List As</label>
            <select value={formValue.status} onChange={handleChange} name="status">            
              <option value="tenant">Tenant</option>
              <option value="owner">Owner</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select value={formValue.gender} onChange={handleChange} name="gender">            
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" onChange={handleChange}></textarea>
          </div>
          <button className="modal__submit" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp