import { useState } from 'react'
import './modal.css'
function Modal ({ title, text, open, setShowModal }) {
  const handleClose = () => {
    setShowModal(false)
    setIsopen(false)
  }
  const [isopen, setIsopen] = useState(open)
  return (
    <div className={`modal ${isopen ? 'open' : ''}`}>
      <div className='card'>
        <h3>{title}</h3>
        <p>{text}</p>
        <button className='modal-btn' onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
