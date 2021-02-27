import '../styles/Modal.css'
import { useState } from 'react'

const Modal = ({ setIsAppointmentModalOpen, currMonth, dayEditing, editAppointment }) => {
  const [appointmentText, setAppointmentText] = useState('')

  const handleEditAppointment = (dayEditing, appointmentText) => {
    editAppointment(dayEditing, appointmentText)
    setIsAppointmentModalOpen(false)
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h2>Edit an appointment for {currMonth} {dayEditing}</h2>
        <input onChange={(event) => setAppointmentText(event.target.value)} />
        <button onClick={() => handleEditAppointment(dayEditing, appointmentText)}>Edit appointment</button>
        <button onClick={() => setIsAppointmentModalOpen(false)}>Close Modal</button>
      </div>
    </div>
  )
}

export default Modal