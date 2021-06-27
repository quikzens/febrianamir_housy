import "./Modal.css"

import close_icon from "../assets/images/close-icon.svg"


const ChangePassword = (props) => {
  const { isModalShow, toggleModal } = props

  const handleSubmit = (e) => {
    // TODO
  }

  const handleChange = (e) => {
    // TODO
  }

  return (
    <div className={`modal modal--change-password ${isModalShow ? 'show': ''}`}>
      <div className="modal__content">
        <div className="modal__close" onClick={toggleModal}>
          <img src={close_icon} alt="" />
        </div>
        <h3 className="modal__heading">
          Change Password
        </h3>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="oldPassword">Old Password</label>
            <input type="password" name="oldPassword" id="oldPassword" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input type="password" name="newPassword" id="newPassword" />
          </div>
          <button className="modal__submit" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword