const Day = ({ day, appointment, addAppointment }) => {
  return (
    <div className="cell">
      {day}
      <br />
      {day && !appointment && (
        <button onClick={addAppointment}>Add appointment</button>
      )}
      {appointment}
    </div>
  )
}

export default Day
