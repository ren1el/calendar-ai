import '../styles/Modal.css'
import { useState } from 'react'

const AddAppointmentModal = ({
  setIsModalOpen,
  currMonth,
  dayEditing,
  addAppointment,
}) => {
  const [appointmentText, setAppointmentText] = useState('')

  const handleAddAppointment = () => {
    addAppointment(dayEditing, appointmentText)
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="modal-bg" onClick={() => setIsModalOpen(false)}></div>
      <div className="modal">
        <div className="close-btn-wrapper">
          <button className="close-btn" onClick={() => setIsModalOpen(false)}>
            X
          </button>
        </div>
        <div className="modal-content">
          <h2>
            Add an appointment for {currMonth} {dayEditing}
          </h2>
          <input
            className="modal-input"
            type="text"
            onChange={event => setAppointmentText(event.target.value)}
          />
          <button onClick={handleAddAppointment}>Add appointment</button>
        </div>
      </div>
    </>
  )
}

export default AddAppointmentModal
