import React, {Component} from 'react';
import getIcon from './helpers/getIcon.js';
import moment from 'moment';

class Forecast extends Component {
  constructor(props) {
    super(props);
    moment.locale('is');
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
      for (var i = 0; i < json.results[0].forecast.length; i++) {
        if(moment(json.results[0].forecast[i].ftime).format('LLLL').split(':')[0] === moment().format('LLLL').split(':')[0]) {
          this.setState({
            data: json,
            info: [
              {
                date: moment(json.results[0].forecast[i+1].ftime).format("LT"),
                degrees: json.results[0].forecast[i+1].T,
                icon: json.results[0].forecast[i+1].W
              },
              {
                date: moment(json.results[0].forecast[i+2].ftime).format("LT"),
                degrees: json.results[0].forecast[i+2].T,
                icon: json.results[0].forecast[i+2].W
              },
              {
                date: moment(json.results[0].forecast[i+3].ftime).format("LT"),
                degrees: json.results[0].forecast[i+3].T,
                icon: json.results[0].forecast[i+3].W
              },
              {
                date: moment(json.results[0].forecast[i+4].ftime).format("LT"),
                degrees: json.results[0].forecast[i+4].T,
                icon: json.results[0].forecast[i+4].W
              },
              {
                date: moment(json.results[0].forecast[i+5].ftime).format("LT"),
                degrees: json.results[0].forecast[i+5].T,
                icon: json.results[0].forecast[i+5].W
              },
              {
                date: moment(json.results[0].forecast[i+6].ftime).format("LT"),
                degrees: json.results[0].forecast[i+6].T,
                icon: json.results[0].forecast[i+6].W
              }

            ]
          })
        }

      }

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
