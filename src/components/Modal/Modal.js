import './Modal.css'

import close_icon from '../../assets/images/close-icon.svg'

function Modal(props) {
  const { show, toggle, title, children } = props

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className='modal__content'>
        <button className='modal__close' onClick={toggle}>
          <img src={close_icon} alt='' />
        </button>
        <h3 className='modal__heading'>{title}</h3>
        {children}
      </div>
    </div>
  )
}

export default Modal
