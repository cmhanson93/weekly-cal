let nextReminderId = 0
export const addReminder = text => ({
  type: 'ADD_REMINDER',
  id: nextReminderId++,
  text
})

export const toggleReminder = id => ({
  type: 'TOGGLE_REMINDER',
  id
})
