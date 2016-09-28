import React, {Component} from 'react';
import Time from './Time.jsx';
import Forecast from './Forecast.jsx';
import WeatherImg from './WeatherImg.jsx';
import moment from 'moment';

class App extends Component {
  constructor() {
    super();
    moment.locale('is');
    this.state = {
      loading: true,
      data: [],
      time: moment().format('LTS')
    }
  }

  componentDidMount(){
    setInterval(this.getTime.bind(this), 1000);
    this.request = fetch(this.props.api)
    .then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        data: json,
        loading: false
      })
    })
    .catch(function(ex) {
      console.log('Request failed:', ex)
    })
  }

  getTime() {
    this.setState({
      time: moment().format('LTS')
    });
  }

  render() {
    return (
      <div className="WeatherCard">
        <div className="WeatherCard-data">
          <Time loading={this.state.loading} time={this.state.time} data={this.state.data}/>
          <Forecast loading={this.state.loading} data={this.state.data}/>
        </div>
        <WeatherImg loading={this.state.loading} data={this.state.data} img="https://images.unsplash.com/photo-1464545022782-925ec69295ef?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=7a79c38ed8e1cf7bcb4bf215948c979e"/>
      </div>
    )
  }
}

App.defaultProps = {
  api: 'https://apis.is/weather/forecasts/is?stations=1'
}
export default App;
