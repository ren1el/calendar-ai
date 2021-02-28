import './App.css'
import { useState } from 'react'
import { useDate } from './hooks/useDate'
import Header from './components/Header'
import Calendar from './components/Calendar'

const App = () => {
  const [appointments, setAppointments] = useState({ ...window.localStorage })
  const {
    date,
    currMonth,
    currYear,
    numDays,
    startDayIndex,
    setDate,
  } = useDate()

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

    localStorage.setItem(`${currMonth} ${day} ${currYear}`, appointmentText)
    setAppointments({
      ...appointments,
      [`${currMonth} ${day} ${currYear}`]: appointmentText,
    })
  }

  const editAppointment = (day, appointmentText) => {
    console.log(`Editing appointment for ${currMonth} ${day} ${currYear}`)

    localStorage.setItem(`${currMonth} ${day} ${currYear}`, appointmentText)
    setAppointments({
      ...appointments,
      [`${currMonth} ${day} ${currYear}`]: appointmentText,
    })
  }

  const removeAppointment = day => {
    console.log(`Removing appointment for ${currMonth} ${day} ${currYear}`)

    localStorage.removeItem(`${currMonth} ${day} ${currYear}`)
    const copy = { ...appointments }
    delete copy[`${currMonth} ${day} ${currYear}`]
    setAppointments(copy)
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
