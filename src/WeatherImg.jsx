import React, {Component} from 'react';
import getIcon from './helpers/getIcon.js';

const WeatherImg = ({loading, img, data}) => {

  var style = {
    backgroundImage: `url(${img})`
  }

  return (
    <div className="WeatherCard-img" style={style}>
      {loading ? ( <p>Loading</p> ) :
      (
        <p className="WeatherCard-caption">
          <span className="WeatherCard-temp">{data.results[0].forecast[0].T}</span>
          <i className={`WeatherCard-icon wi ${getIcon(data.results[0].forecast[0].W)}`}></i>
        </p>
      )
      }
    </div>
  )
}

export default WeatherImg;
