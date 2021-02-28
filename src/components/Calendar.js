import { days } from '../data/time'
import Day from './Day'

const Calendar = ({
  date,
  currMonth,
  currYear,
  numDays,
  startDayIndex,
  addAppointment,
  editAppointment,
  removeAppointment,
}) => {
  const createCalendarCells = () => {
    const cells = []
    let day = 1

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDayIndex) || day > numDays) {
          cells.push(
            <div
              className="cell not-current-month"
              key={`${currMonth} ${i} ${j} ${currYear}`}
            ></div>
          )
        } else if (day <= numDays) {
          const day_copy = day
          const appointment = localStorage.getItem(
            `${currMonth} ${day_copy} ${currYear}`
          )

          const isDayFuture =
            new Date(date.getFullYear(), date.getMonth(), day) >=
            new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              new Date().getDate()
            )

          const isTodaysDate =
            date.getFullYear() === new Date().getFullYear() &&
            date.getMonth() === new Date().getMonth() &&
            day === new Date().getDate()

          cells.push(
            <Day
              key={`${currMonth} ${day} ${currYear}`}
              currMonth={currMonth}
              day={day}
              isDayFuture={isDayFuture}
              isTodaysDate={isTodaysDate}
              appointment={appointment}
              addAppointment={addAppointment}
              editAppointment={editAppointment}
              removeAppointment={removeAppointment}
            />
          )

          day++
        }
      }
    }

    return cells
  }

  return (
    <>
      <div className="calendar">
        {days.map(day => (
          <div className="cell weekday" key={day}>
            <span>{day}</span>
          </div>
        ))}
        {createCalendarCells()}
      </div>
      <p>
        Note: Hover over today's date or a future date to add an appointment.
      </p>
    </>
  )
}

export default Calendar
