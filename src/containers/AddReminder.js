import React from 'react'
import { connect } from 'react-redux'
import { addReminder } from '../actions'

const AddReminder = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addReminder(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Reminder</button>
      </form>
    </div>
  )
}

export default connect()(AddReminder)
