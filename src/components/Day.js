import { useState } from 'react'
import AppointmentModal from '../components/AppointmentModal'
import AddAppointmentModal from './AddAppointmentModal'
import '../styles/Day.css'

const Day = ({
  currMonth,
  day,
  isDayFuture,
  isTodaysDate,
  appointment,
  addAppointment,
  editAppointment,
  removeAppointment,
}) => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isAddAppointmentModalOpen, setIsAddAppointmentModalOpen] = useState(
    false
  )

  return (
    <div className="cell">
      {isAppointmentModalOpen && (
        <AppointmentModal
          setIsAppointmentModalOpen={setIsAppointmentModalOpen}
          currMonth={currMonth}
          dayEditing={day}
          editAppointment={editAppointment}
          removeAppointment={removeAppointment}
          appointment={appointment}
        />
      )}

      {isAddAppointmentModalOpen && (
        <AddAppointmentModal
          setIsModalOpen={setIsAddAppointmentModalOpen}
          currMonth={currMonth}
          dayEditing={day}
          addAppointment={addAppointment}
        />
      )}

      <div className="cell-header">
        {day && !appointment && isDayFuture && (
          <button
            className="appointment-btn"
            onClick={() => setIsAddAppointmentModalOpen(true)}
          >
            <img
              alt="Add appointment"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAATUlEQVRoge3PMQrAIAAEQf//6aS3CRZhVWbg+tsxAIA7PdOOI6AmoCagJqAmoLZdwHzo7wkQsFvAqu0OrRJQE1ATUBNQE1A7PgAA+PIClYTPMV1LeVEAAAAASUVORK5CYII="
            />
          </button>
        )}
        <div className="day-number">
          {isTodaysDate ? <span className="today">{day}</span> : day}
        </div>
      </div>

      {appointment && (
        <div className="appointment">
          <div onClick={() => setIsAppointmentModalOpen(true)}>
            {appointment}
          </div>
        </div>
      )}
    </div>
  )
}

export default Day
