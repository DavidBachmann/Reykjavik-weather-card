import React, {Component} from 'react';
import getIcon from './helpers/getIcon.js';
import moment from 'moment';

const Forecast = ({loading, data}) => {
  let bla = [];

  if (!loading) {
    for (var i = 0; i < data.results[0].forecast.length; i++) {
      if(moment(data.results[0].forecast[i].ftime).format('LLLL').split(':')[0] === moment().format('LLLL').split(':')[0]) {
        bla = [
          {
            date: moment(data.results[0].forecast[i+1].ftime).format("LT"),
            degrees: data.results[0].forecast[i+1].T,
            icon: data.results[0].forecast[i+1].W
          },
          {
            date: moment(data.results[0].forecast[i+2].ftime).format("LT"),
            degrees: data.results[0].forecast[i+2].T,
            icon: data.results[0].forecast[i+2].W
          },
          {
            date: moment(data.results[0].forecast[i+3].ftime).format("LT"),
            degrees: data.results[0].forecast[i+3].T,
            icon: data.results[0].forecast[i+3].W
          },
          {
            date: moment(data.results[0].forecast[i+4].ftime).format("LT"),
            degrees: data.results[0].forecast[i+4].T,
            icon: data.results[0].forecast[i+4].W
          },
          {
            date: moment(data.results[0].forecast[i+5].ftime).format("LT"),
            degrees: data.results[0].forecast[i+5].T,
            icon: data.results[0].forecast[i+5].W
          },
          {
            date: moment(data.results[0].forecast[i+6].ftime).format("LT"),
            degrees: data.results[0].forecast[i+6].T,
            icon: data.results[0].forecast[i+6].W
          }

        ]
      }

    }
  }

    return ( <div>
        { loading ? (<p>Loading</p>) : (
            <ul className="Forecast">
              {bla.map((info, index) => {
                return (
                  <li className="Forecast-item" key={index}>
                   <p>{info.date}</p>
                    <p><i className={`WeatherCard-icon wi ${getIcon(info.icon)}`}></i></p>
                    <p>{info.degrees}°</p>
                  </li>
                );
              })}
            </ul> )}
      </div> )
}

export default Forecast;
