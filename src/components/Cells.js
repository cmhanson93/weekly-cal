import React from 'react';
import dateFns from 'date-fns';
import AddReminder from '../containers/AddReminder';
import ReminderContainer from '../containers/ReminderContainer';

class Cells extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onDateClick(e.target.value);
  }

  render() {
    const date = this.props.currentWeek;
    const selectedDate = this.props.selectedDate;
    console.log(date);
    const startDate = dateFns.startOfWeek(date);
    const endDate = dateFns.endOfWeek(date);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i=0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              (!dateFns.isSameWeek(day, startDate) || dateFns.isWeekend(day))
              ? "disabled"
              : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onDateClick={() => this.handleChange(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <span className="reminder">
              <AddReminder />
              <ReminderContainer />
            </span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  }


}

export default Cells
