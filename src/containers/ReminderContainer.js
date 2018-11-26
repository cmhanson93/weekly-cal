import { connect } from 'react-redux'
import { toggleReminder } from '../actions'
import ReminderList from '../components/ReminderList'

const mapStateToProps = state => ({
  reminders: state.reminders
})

const mapDispatchToProps = dispatch => ({
  toggleReminder: id => dispatch(toggleReminder(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList)
