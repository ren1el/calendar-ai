import '../styles/Modal.css'
import { useState } from 'react'

const ModifyAppointmentModal = ({
  setIsAppointmentModalOpen,
  currMonth,
  dayEditing,
  editAppointment,
  removeAppointment,
  appointment,
}) => {
  const [appointmentText, setAppointmentText] = useState(appointment)
  const [isEditing, setIsEditing] = useState(false)
  const [errorText, setErrorText] = useState('')

  const handleEditAppointment = () => {
    if (!appointmentText || !appointmentText.trim()) {
      setErrorText('Your appointment should contain text!')
      setTimeout(() => setErrorText(''), 2000)
      return
    }

    try {
      editAppointment(dayEditing, appointmentText)
      setIsAppointmentModalOpen(false)
    } catch {
      setErrorText('There was an error editing an appointment.')
      setTimeout(() => setErrorText(''), 2000)
      return
    }
  }

  const handleRemoveAppointment = () => {
    try {
      removeAppointment(dayEditing)
      setIsAppointmentModalOpen(false)
    } catch {
      setErrorText('There was an error removing an appointment.')
      setTimeout(() => setErrorText(''), 2000)
      return
    }
  }

  return (
    <>
      <div
        className="modal-bg"
        onClick={() => setIsAppointmentModalOpen(false)}
      ></div>
      <div className="modal">
        <div className="close-btn-wrapper">
          <button
            className="close-btn"
            onClick={() => setIsAppointmentModalOpen(false)}
          >
            X
          </button>
        </div>

        <div className="modal-content">
          {errorText && <p>{errorText}</p>}
          <h3>
            [{currMonth} {dayEditing} Appointment]
          </h3>
          <h2>"{appointment}"</h2>

          {isEditing && (
            <>
              <input
                className="modal-input"
                type="text"
                value={appointmentText}
                onChange={event => setAppointmentText(event.target.value)}
              />
              <button className="modify-btn" onClick={handleEditAppointment}>
                Save
              </button>
              <button className="modify-btn" onClick={handleRemoveAppointment}>
                Delete
              </button>
            </>
          )}

          {!isEditing && (
            <>
              <button onClick={() => setIsEditing(true)}>
                Edit appointment
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ModifyAppointmentModal
