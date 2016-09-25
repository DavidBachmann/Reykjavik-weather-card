import React, {Component} from 'react';
import Time from './Time.jsx';
import Forecast from './Forecast.jsx';
import WeatherImg from './WeatherImg.jsx';

class App extends Component {
  render() {
    return (
      <div className="WeatherCard">
        <div className="WeatherCard-data">
          <Time/>
          <Forecast/>
        </div>
        <WeatherImg/>
      </div>
    )
  }
}
export default App;
