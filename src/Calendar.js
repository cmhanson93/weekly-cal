import React from 'react';
import dateFns from 'date-fns';

import Cells from './components/Cells';

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.handleDateClick = this.handleDateClick.bind(this);
    this.state = {currentWeek: new Date(), selectedDate: new Date()};
  }

  handleDateClick(currentWeek, selectedDate) {
    this.setState({currentWeek, selectedDate});
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevWeek}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentWeek, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextWeek}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "ddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentWeek);

    for (let i=0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }

  nextWeek = () => {
    this.setState({
      currentWeek: dateFns.addWeeks(this.state.currentWeek, 1)
    });
  };

  prevWeek = () => {
    this.setState({
      currentWeek: dateFns.subWeeks(this.state.currentWeek, 1)
    });
  };

  render () {
    const currentWeek = this.state.currentWeek;
    const selectedDate = this.state.selectedDate;

    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        <Cells
          currentWeek={currentWeek}
          selectedDate={selectedDate}
          onDateClick={this.handleDateClick} />
      </div>
    );
  }
}


export default Calendar;
