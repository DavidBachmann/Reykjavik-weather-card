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
        <WeatherImg img="https://images.unsplash.com/photo-1464545022782-925ec69295ef?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=7a79c38ed8e1cf7bcb4bf215948c979e"/>
      </div>
    )
  }
}
export default App;
