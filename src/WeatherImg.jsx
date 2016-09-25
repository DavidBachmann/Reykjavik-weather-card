import React, {Component} from 'react';
import data from './data.json';
import getIcon from './helpers/getIcon.js';

class WeatherImg extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.request = fetch('https://apis.is/weather/forecasts/is?stations=1')
    .then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        name: json.results[0].name,
        data: json.results[0].forecast[0]
      })
    })
    .catch(function(ex) {
      console.log('Request failed:', ex)
    })
  }
  render() {
    var style = {
      backgroundImage: 'url(' + this.props.img + ')'
    }

    return (
      <div className="WeatherCard-img" style={style}>
          <p className="WeatherCard-caption">
            <span className="WeatherCard-temp">{this.state.data.T}</span>
            <i className={`WeatherCard-icon wi ${getIcon(this.state.data.W)}`}></i>
          </p>
        <p className="WeatherCard-name">{this.state.name}</p>
      </div>
    );
  }
}

export default WeatherImg;
