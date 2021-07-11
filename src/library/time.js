import { months } from '../data/months'
import { days } from '../data/days'

export function getTimeDifference(checkIn, checkOut, typeRent) {
  const time1 = new Date(checkIn)
  const time2 = new Date(checkOut)
  const differenceInTime = time2.getTime() - time1.getTime()

  let differenceType
  let difference

  switch (typeRent) {
    case 'day':
      difference = Math.floor(differenceInTime / (1000 * 3600 * 24))
      differenceType = 'day'
      break
    case 'month':
      difference = Math.floor(differenceInTime / (1000 * 3600 * 24 * 30))
      differenceType = 'month'
      break
    case 'year':
      difference = Math.floor(differenceInTime / (1000 * 3600 * 24 * 365))
      differenceType = 'year'
      break
    default:
      break
  }

  return {
    differenceType,
    difference,
  }
}

export function printDate(dateString, withDay = false) {
  const time = new Date(dateString)

  const day = days[time.getDay()]
  const date = time.getDate()
  const month = months[time.getMonth()]
  const year = time.getFullYear()

  if (withDay) {
    return `${day}, ${date} ${month} ${year}`
  }
  return `${date} ${month} ${year}`
}
