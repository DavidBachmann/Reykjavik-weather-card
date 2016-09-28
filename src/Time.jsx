import React, {Component} from 'react';
import moment from 'moment';

const Time = ({loading, data, time}) => {
  return (
    <div>
      {loading ? ( <p>Loading</p> ) :
        (
          <div className="WeatherCard-top">
            <p className="WeatherCard-day">{moment(data.results[0].forecast[0].atime).format("ddd Do")}</p>
            <p className="WeatherCard-month">{moment(data.results[0].forecast[0].atime).format("MMMM")}</p>
            <p className="WeatherCard-time">{time}</p>
          </div>
        )
      }
    </div>
  )
}

export default Time;
