// This function is only going to work for the months of February and March ;)
export const getLastSevenDays = () => {
  const today = new Date()

  const day = today.getDate()
  const lastSevenDays: string[] = []

  let i
  let newDate = day
  let newMonth = today.getMonth() + 1
  for (i = 0; i < 7; i++) {
    lastSevenDays.push(`2021/0${newMonth}/${newDate}`)
    if (newDate > 1) {
      newDate -= 1
    } else {
      newDate = 28
      newMonth -= 1
    }
  }

  return lastSevenDays
}
