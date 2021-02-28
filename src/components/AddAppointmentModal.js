import '../styles/Modal.css'
import { useState } from 'react'

const AddAppointmentModal = ({
  setIsModalOpen,
  currMonth,
  dayEditing,
  addAppointment,
}) => {
  const [appointmentText, setAppointmentText] = useState('')
  const [errorText, setErrorText] = useState('')

  const handleAddAppointment = () => {
    if (!appointmentText || !appointmentText.trim()) {
      setErrorText('Your appointment should contain text!')
      setTimeout(() => setErrorText(''), 2000)
      return
    }

    try {
      addAppointment(dayEditing, appointmentText)
      setIsModalOpen(false)
    } catch {
      setErrorText('There was an error adding an appointment.')
      setTimeout(() => setErrorText(''), 2000)
      return
    }
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
          {errorText && <p>{errorText}</p>}
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
