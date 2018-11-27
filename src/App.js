import React from 'react';

import Calendar from './Calendar';
import AddReminder from './containers/AddReminder';
import ReminderContainer from './containers/ReminderContainer';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span>
              Weekly Planner
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}


export default App;
