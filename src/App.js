import './styles/App.css'
import { useState, useEffect } from 'react'
import { useDate } from './hooks/useDate'
import Header from './components/Header'
import Calendar from './components/Calendar'

const App = () => {
  const [appointments, setAppointments] = useState({})
  const {
    date,
    currMonth,
    currYear,
    numDays,
    startDayIndex,
    setDate,
  } = useDate()

  useEffect(() => {
    if (window) {
      setAppointments(window.localStorage)
    }
  }, [])

  const handleGetPrevMonth = () => {
    if (date >= new Date()) {
      const todayDate = new Date()
      const newDate =
        new Date(date.getFullYear(), date.getMonth() - 1).getMonth() ===
        todayDate.getMonth()
          ? new Date(
              date.getFullYear(),
              date.getMonth() - 1,
              todayDate.getDate()
            )
          : new Date(date.getFullYear(), date.getMonth() - 1)

      setDate(newDate)
    }
  }

  const handleGetNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1))
  }

  const addAppointment = (day, appointmentText) => {
    console.log(`Adding appointment to ${currMonth} ${day} ${currYear}`)

    try {
      localStorage.setItem(`${currMonth} ${day} ${currYear}`, appointmentText)
      setAppointments({
        ...appointments,
        [`${currMonth} ${day} ${currYear}`]: appointmentText,
      })
    } catch {
      console.warn(
        `Error adding appointment to ${currMonth} ${day} ${currYear}`
      )
    }
  }

  const editAppointment = (day, appointmentText) => {
    console.log(`Editing appointment for ${currMonth} ${day} ${currYear}`)

    try {
      localStorage.setItem(`${currMonth} ${day} ${currYear}`, appointmentText)
      setAppointments({
        ...appointments,
        [`${currMonth} ${day} ${currYear}`]: appointmentText,
      })
    } catch {
      console.warn(
        `Error editing appointment to ${currMonth} ${day} ${currYear}`
      )
    }
  }

  const removeAppointment = day => {
    console.log(`Removing appointment for ${currMonth} ${day} ${currYear}`)

    try {
      localStorage.removeItem(`${currMonth} ${day} ${currYear}`)
      const copy = { ...appointments }
      delete copy[`${currMonth} ${day} ${currYear}`]
      setAppointments(copy)
    } catch {
      console.warn(
        `Error removing appointment for ${currMonth} ${day} ${currYear}`
      )
    }
  }

  return (
    <div className="calendar-wrapper">
      <Header
        handleGetPrevMonth={handleGetPrevMonth}
        handleGetNextMonth={handleGetNextMonth}
        currMonth={currMonth}
        currYear={currYear}
      />
      <Calendar
        date={date}
        currMonth={currMonth}
        currYear={currYear}
        numDays={numDays}
        startDayIndex={startDayIndex}
        addAppointment={addAppointment}
        editAppointment={editAppointment}
        removeAppointment={removeAppointment}
      />
    </div>
  )
}

export default App
