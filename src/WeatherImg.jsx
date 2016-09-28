import React, {Component} from 'react';
import getIcon from './helpers/getIcon.js';
import moment from 'moment';

const WeatherImg = ({loading, img, data}) => {

  var style = {
    backgroundImage: `url(${img})`
  }
  let bla = {};

  if (!loading) {
    for (var i = 0; i < data.results[0].forecast.length; i++) {
      if(moment(data.results[0].forecast[i].ftime).format('LLLL').split(':')[0] === moment().format('LLLL').split(':')[0]) {
        bla = {
          degrees: data.results[0].forecast[i].T,
          icon: data.results[0].forecast[i].W
        }
      }
    }
  }
  return (
    <div className="WeatherCard-img" style={style}>
      {loading ? ( <p>Loading</p> ) :
      (
        <p className="WeatherCard-caption">
          <span className="WeatherCard-temp">{bla.degrees}</span>
          <i className={`WeatherCard-icon wi ${getIcon(bla.icon)}`}></i>
        </p>
      )
      }
    </div>
  )
}

export default WeatherImg;
