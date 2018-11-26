import React from 'react'
import PropTypes from 'prop-types'
import Reminder from './Reminder'

const ReminderList = ({ reminders, toggleReminder }) => (
  <ul>
    {reminders.map(reminder => (
      <Reminder key={reminder.id} {...reminder} onClick={() => toggleReminder(reminder.id)} />
    ))}
  </ul>
)

ReminderList.propTypes = {
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleReminder: PropTypes.func.isRequired
}

export default ReminderList
