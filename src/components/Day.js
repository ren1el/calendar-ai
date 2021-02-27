import { useState } from 'react'
import AppointmentModal from '../components/AppointmentModal'

const Day = ({
  currMonth,
  day,
  appointment,
  addAppointment,
  editAppointment,
  setDayEditing,
  setIsModalOpen,
}) => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const handleAddAppointment = () => {
    setIsModalOpen(true)
    setDayEditing(day)
  }

  return (
    <div className="cell">
      {isAppointmentModalOpen && (
        <AppointmentModal
          setIsAppointmentModalOpen={setIsAppointmentModalOpen}
          month={currMonth}
          dayEditing={day}
          editAppointment={editAppointment}
        />
      )}
      <div className="day-number">{day}</div>
      <br />
      {day && !appointment && (
        <button onClick={handleAddAppointment}>Add appointment</button>
      )}
      <div onClick={() => setIsAppointmentModalOpen(true)}>{appointment}</div>
    </div>
  )
}

export default Day
