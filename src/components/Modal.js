import '../styles/Modal.css'
import { useState } from 'react'

const Modal = ({ setIsModalOpen, currMonth, dayEditing, addAppointment }) => {
  const [appointmentText, setAppointmentText] = useState('')

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h2>Add an appointment for {currMonth} {dayEditing}</h2>
        <input onChange={(event) => setAppointmentText(event.target.value)} />
        <button onClick={() => addAppointment(dayEditing, appointmentText)}>Add appointment</button>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </div>
    </div>
  )
}

export default Modal
