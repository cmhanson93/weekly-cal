import React from 'react';
import dateFns from 'date-fns';

class Days extends React.Component {

  state = {
    currentWeek: new Date(),
    selectedDate: new Date()
  };

  render() {
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
}

export default Days
