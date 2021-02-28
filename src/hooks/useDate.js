import { useState, useDebugValue } from 'react'
import { months } from '../data/time'

export const useDate = () => {
  const [date, setDate] = useState(new Date())

  const currMonth = months[date.getMonth()]
  const currYear = date.getFullYear()
  const numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const startDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay()

  useDebugValue(date ?? 'loading...')

  return { date, currMonth, currYear, numDays, startDayIndex, setDate }
}
