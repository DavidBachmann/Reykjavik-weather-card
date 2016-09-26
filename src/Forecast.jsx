import React, {Component} from 'react';
import getIcon from './helpers/getIcon.js';
import moment from 'moment';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      info: []
    }
  }
  componentDidMount() {
    this.request = fetch('https://apis.is/weather/forecasts/is?stations=1')
    .then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        data: json,
        info: [
          {
            date: moment(json.results[0].forecast[1].ftime).format("h:mm"),
            degrees: json.results[0].forecast[1].T,
            icon: json.results[0].forecast[1].W
          },
          {
            date: moment(json.results[0].forecast[2].ftime).format("h:mm"),
            degrees: json.results[0].forecast[2].T,
            icon: json.results[0].forecast[2].W
          },
          {
            date: moment(json.results[0].forecast[3].ftime).format("h:mm"),
            degrees: json.results[0].forecast[3].T,
            icon: json.results[0].forecast[3].W
          },
          {
            date: moment(json.results[0].forecast[4].ftime).format("h:mm"),
            degrees: json.results[0].forecast[4].T,
            icon: json.results[0].forecast[4].W
          },
          {
            date: moment(json.results[0].forecast[5].ftime).format("h:mm"),
            degrees: json.results[0].forecast[5].T,
            icon: json.results[0].forecast[5].W
          },
          {
            date: moment(json.results[0].forecast[6].ftime).format("h:mm"),
            degrees: json.results[0].forecast[6].T,
            icon: json.results[0].forecast[6].W
          }

        ]
      })
    })
    .catch(function(ex) {
      console.log('Request failed:', ex)
    })
  }
  render() {
    return (
      <ul className="Forecast">
      {this.state.info.map((info, index) => {
          return (
            <li className="Forecast-item" key={index}>
             <p>{info.date}</p>
              <p><i className={`WeatherCard-icon wi ${getIcon(info.icon)}`}></i></p>
              <p>{info.degrees}°</p>
            </li>
          );
        })}
      </ul>
    )
  }
}

export default Forecast;
