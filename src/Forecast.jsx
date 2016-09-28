import React, {Component} from 'react';
import getIcon from './helpers/getIcon.js';
import moment from 'moment';

const Forecast = ({loading, data}) => {
  let arr = [];

  if (!loading) {
    for (var i = 0; i < data.results[0].forecast.length; i++) {
      if(moment(data.results[0].forecast[i].ftime).format('LLLL').split(':')[0] === moment().format('LLLL').split(':')[0]) {
        for (var x = 0; x < 6; x++) {
          arr.push({
              date: moment(data.results[0].forecast[i+x].ftime).format("LT"),
              degrees: data.results[0].forecast[i+x].T,
              icon: data.results[0].forecast[i+x].W
          })
        }
      }

    }
  }

    return ( <div>
        { loading ? (<p>Loading</p>) : (
            <ul className="Forecast">
              {arr.map((item, index) => {
                return (
                  <li className="Forecast-item" key={index}>
                   <p>{item.date}</p>
                    <p><i className={`WeatherCard-icon wi ${getIcon(item.icon)}`}></i></p>
                    <p>{item.degrees}°</p>
                  </li>
                );
              })}
            </ul> )}
      </div> )
}

export default Forecast;
