import { useState } from 'react'
import './App.css'
import Day from './components/Day'
import Modal from './components/Modal'

const App = () => {
  const [date, setDate] = useState(new Date())
  const [appointments, setAppointments] = useState({ ...window.localStorage })
  const [isModalOpen, setIsModelOpen] = useState(false)
  const [dayEditing, setDayEditing] = useState(null)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const handlePrevMonth = () => {
    if(date >= (new Date())) {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1))
    }
  }

  const addAppointment = (day, appointmentText) => {
    console.log(`Adding appointment to ${currMonth} ${day} ${currYear}`)

    localStorage.setItem(`${currMonth} ${day} ${currYear}`, appointmentText)
    setAppointments({
      ...appointments,
      [`${currMonth} ${day} ${currYear}`]: appointmentText,
    })
    setIsModelOpen(false)
  }

  const editAppointment = (day, appointmentText) => {
    console.log(`Editing appointment for ${currMonth} ${day} ${currYear}`)

    localStorage.setItem(`${currMonth} ${day} ${currYear}`, appointmentText)
    setAppointments({
      ...appointments,
      [`${currMonth} ${day} ${currYear}`]: appointmentText,
    })
  }

  const currMonth = months[date.getMonth()]
  const currYear = date.getFullYear()
  const numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const startDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay()
  // const startDay =
  //   days[new Date(date.getFullYear(), date.getMonth(), 1).getDay()]
  const cells = []
  let day = 1

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < startDayIndex) || day > numDays) {
        cells.push(
          <div
            className="cell"
            key={`${currMonth} ${i} ${j} ${currYear}`}
          ></div>
        )
      } else if (day <= numDays) {
        const day_copy = day
        const appointment = localStorage.getItem(
          `${currMonth} ${day_copy} ${currYear}`
        )

        cells.push(
          <Day
            day={day}
            appointment={appointment}
            setDayEditing={setDayEditing}
            setIsModalOpen={setIsModelOpen}
            addAppointment={() => addAppointment(day_copy)}
            editAppointment={editAppointment}
            key={`${currMonth} ${day} ${currYear}`}
          />
        )
        day++
      }
    }
  }

  return (
    <div>
      <button onClick={() => setIsModelOpen(true)}>Open modal</button>
      {isModalOpen && <Modal setIsModalOpen={setIsModelOpen} currMonth={currMonth} dayEditing={dayEditing} addAppointment={addAppointment} />}
      <button
        onClick={handlePrevMonth}
      >
        Go to Prev Month
      </button>
      <button
        onClick={() =>
          setDate(new Date(date.getFullYear(), date.getMonth() + 1))
        }
      >
        Go to Next Month
      </button>
      <h1>
        {currMonth} {currYear}
      </h1>
      <div className="calendar">
        {days.map(day => (
          <div className="cell weekday" key={day}>
            <span>{day}</span>
          </div>
        ))}
        {cells}
      </div>
    </div>
  )
}

export default App
