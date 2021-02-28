import '../styles/Modal.css'
import { useState } from 'react'

const Modal = ({
  setIsAppointmentModalOpen,
  currMonth,
  dayEditing,
  editAppointment,
  removeAppointment,
  appointment,
}) => {
  const [appointmentText, setAppointmentText] = useState(appointment)
  const [isEditing, setIsEditing] = useState(false)

  const handleEditAppointment = () => {
    editAppointment(dayEditing, appointmentText)
    setIsAppointmentModalOpen(false)
  }

  const handleRemoveAppointment = () => {
    removeAppointment(dayEditing)
    setIsAppointmentModalOpen(false)
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

          {/* <h2>
            {currMonth} {dayEditing} Appointment - "{appointment}"
          </h2>
          <input onChange={event => setAppointmentText(event.target.value)} />
          <button onClick={handleEditAppointment}>Edit appointment</button>
          <button onClick={handleRemoveAppointment}>Remove appointment</button> */}
        </div>
      </div>
    </>
  )
}

export default Modal
