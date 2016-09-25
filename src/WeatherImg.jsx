import React, {Component} from 'react';
import data from './data.json';
import getIcon from './helpers/getIcon.js';

class WeatherImg extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(data)
    var style = {
      backgroundImage: 'url(' + this.props.img + ')'
    }
    return (
      <div className="WeatherCard-img" style={style}>
          <p className="WeatherCard-caption">
            <span className="WeatherCard-temp">{this.props.results[0].forecast[0].T}</span>
            <i className={`WeatherCard-icon wi ${getIcon(this.props.results[0].forecast[0].W)}`}></i>
          </p>
        <p className="WeatherCard-name">{this.props.results[0].name}</p>
      </div>
    );
  }
}

WeatherImg.defaultProps = {
  "img": "https://images.unsplash.com/photo-1464545022782-925ec69295ef?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=7a79c38ed8e1cf7bcb4bf215948c979e",
  "coord": {
    "lon": -21.9,
    "lat": 64.14
  },
  "results": [{
    "name": "Reykjavík",
    "atime": "2016-09-24 06:00:00",
    "err": "",
    "link": "http://www.vedur.is/vedur/spar/stadaspar/hofudborgarsvaedid/#group=100&station=1",
    "forecast": [{
      "ftime": "2016-09-24 07:00:00",
      "F": "4",
      "D": "NA",
      "T": "8",
      "W": "Alskýjað",
      "N": "100",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 08:00:00",
      "F": "5",
      "D": "NA",
      "T": "8",
      "W": "Alskýjað",
      "N": "100",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 09:00:00",
      "F": "3",
      "D": "NA",
      "T": "8",
      "W": "Lítils háttar rigning",
      "N": "100",
      "TD": "3",
      "R": "0.1"
    }, {
      "ftime": "2016-09-24 10:00:00",
      "F": "2",
      "D": "NA",
      "T": "8",
      "W": "Rigning",
      "N": "100",
      "TD": "4",
      "R": "0.4"
    }, {
      "ftime": "2016-09-24 11:00:00",
      "F": "3",
      "D": "NA",
      "T": "8",
      "W": "Rigning",
      "N": "100",
      "TD": "5",
      "R": "1.3"
    }, {
      "ftime": "2016-09-24 12:00:00",
      "F": "3",
      "D": "NA",
      "T": "10",
      "W": "Alskýjað",
      "N": "100",
      "TD": "5",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 13:00:00",
      "F": "5",
      "D": "NA",
      "T": "10",
      "W": "Alskýjað",
      "N": "100",
      "TD": "6",
      "R": "0.1"
    }, {
      "ftime": "2016-09-24 14:00:00",
      "F": "6",
      "D": "NA",
      "T": "10",
      "W": "Skýjað",
      "N": "90",
      "TD": "6",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 15:00:00",
      "F": "8",
      "D": "ANA",
      "T": "12",
      "W": "Léttskýjað",
      "N": "20",
      "TD": "6",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 16:00:00",
      "F": "7",
      "D": "ANA",
      "T": "12",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "6",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 17:00:00",
      "F": "8",
      "D": "ANA",
      "T": "12",
      "W": "Léttskýjað",
      "N": "90",
      "TD": "6",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 18:00:00",
      "F": "7",
      "D": "ANA",
      "T": "12",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "6",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 19:00:00",
      "F": "6",
      "D": "ANA",
      "T": "11",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "6",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 20:00:00",
      "F": "7",
      "D": "ANA",
      "T": "10",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "5",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 21:00:00",
      "F": "7",
      "D": "ANA",
      "T": "10",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "4",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 22:00:00",
      "F": "6",
      "D": "ANA",
      "T": "10",
      "W": "Skýjað",
      "N": "100",
      "TD": "4",
      "R": "0.0"
    }, {
      "ftime": "2016-09-24 23:00:00",
      "F": "6",
      "D": "ANA",
      "T": "9",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 00:00:00",
      "F": "6",
      "D": "A",
      "T": "9",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 01:00:00",
      "F": "6",
      "D": "A",
      "T": "9",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 02:00:00",
      "F": "7",
      "D": "A",
      "T": "9",
      "W": "Heiðskírt",
      "N": "30",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 03:00:00",
      "F": "8",
      "D": "ANA",
      "T": "9",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 04:00:00",
      "F": "7",
      "D": "ANA",
      "T": "9",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 05:00:00",
      "F": "6",
      "D": "ANA",
      "T": "9",
      "W": "Skýjað",
      "N": "80",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 06:00:00",
      "F": "6",
      "D": "A",
      "T": "9",
      "W": "Skýjað",
      "N": "100",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 07:00:00",
      "F": "5",
      "D": "A",
      "T": "9",
      "W": "Léttskýjað",
      "N": "20",
      "TD": "2",
      "R": "0.1"
    }, {
      "ftime": "2016-09-25 08:00:00",
      "F": "4",
      "D": "A",
      "T": "8",
      "W": "Léttskýjað",
      "N": "20",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 09:00:00",
      "F": "4",
      "D": "ANA",
      "T": "9",
      "W": "Léttskýjað",
      "N": "30",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 10:00:00",
      "F": "3",
      "D": "ANA",
      "T": "9",
      "W": "Alskýjað",
      "N": "100",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 11:00:00",
      "F": "1",
      "D": "NA",
      "T": "10",
      "W": "Alskýjað",
      "N": "100",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 12:00:00",
      "F": "2",
      "D": "N",
      "T": "10",
      "W": "Alskýjað",
      "N": "90",
      "TD": "4",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 13:00:00",
      "F": "3",
      "D": "NNA",
      "T": "11",
      "W": "Skýjað",
      "N": "90",
      "TD": "4",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 14:00:00",
      "F": "4",
      "D": "NNA",
      "T": "12",
      "W": "Skýjað",
      "N": "40",
      "TD": "5",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 15:00:00",
      "F": "5",
      "D": "NNA",
      "T": "12",
      "W": "Skýjað",
      "N": "90",
      "TD": "5",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 16:00:00",
      "F": "6",
      "D": "NNA",
      "T": "11",
      "W": "Skýjað",
      "N": "70",
      "TD": "4",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 17:00:00",
      "F": "6",
      "D": "NNA",
      "T": "10",
      "W": "Alskýjað",
      "N": "90",
      "TD": "5",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 18:00:00",
      "F": "5",
      "D": "NA",
      "T": "10",
      "W": "Alskýjað",
      "N": "100",
      "TD": "4",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 19:00:00",
      "F": "3",
      "D": "NA",
      "T": "9",
      "W": "Alskýjað",
      "N": "80",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 20:00:00",
      "F": "1",
      "D": "SA",
      "T": "8",
      "W": "Skýjað",
      "N": "70",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 21:00:00",
      "F": "1",
      "D": "S",
      "T": "7",
      "W": "Skýjað",
      "N": "70",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 22:00:00",
      "F": "1",
      "D": "S",
      "T": "6",
      "W": "Alskýjað",
      "N": "100",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-25 23:00:00",
      "F": "1",
      "D": "S",
      "T": "5",
      "W": "Skýjað",
      "N": "100",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 00:00:00",
      "F": "2",
      "D": "SSA",
      "T": "4",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 01:00:00",
      "F": "2",
      "D": "S",
      "T": "4",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 02:00:00",
      "F": "1",
      "D": "SA",
      "T": "3",
      "W": "Heiðskírt",
      "N": "30",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 03:00:00",
      "F": "1",
      "D": "S",
      "T": "3",
      "W": "Heiðskírt",
      "N": "10",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 04:00:00",
      "F": "2",
      "D": "S",
      "T": "3",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 05:00:00",
      "F": "1",
      "D": "S",
      "T": "2",
      "W": "Léttskýjað",
      "N": "70",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 06:00:00",
      "F": "2",
      "D": "S",
      "T": "2",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "-1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 07:00:00",
      "F": "2",
      "D": "SSA",
      "T": "2",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "-1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 08:00:00",
      "F": "1",
      "D": "SSA",
      "T": "2",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "-1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 09:00:00",
      "F": "2",
      "D": "S",
      "T": "3",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "-1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 10:00:00",
      "F": "2",
      "D": "SSA",
      "T": "4",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 11:00:00",
      "F": "1",
      "D": "SV",
      "T": "6",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 12:00:00",
      "F": "0",
      "D": "Logn",
      "T": "7",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 13:00:00",
      "F": "1",
      "D": "S",
      "T": "8",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 14:00:00",
      "F": "1",
      "D": "NV",
      "T": "9",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 15:00:00",
      "F": "1",
      "D": "N",
      "T": "9",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 16:00:00",
      "F": "1",
      "D": "N",
      "T": "10",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 17:00:00",
      "F": "2",
      "D": "NNA",
      "T": "10",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 18:00:00",
      "F": "2",
      "D": "ANA",
      "T": "9",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 19:00:00",
      "F": "2",
      "D": "ANA",
      "T": "8",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 20:00:00",
      "F": "2",
      "D": "A",
      "T": "6",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 21:00:00",
      "F": "3",
      "D": "A",
      "T": "5",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 22:00:00",
      "F": "2",
      "D": "ASA",
      "T": "4",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "-1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-26 23:00:00",
      "F": "5",
      "D": "A",
      "T": "5",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-27 00:00:00",
      "F": "5",
      "D": "A",
      "T": "5",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-27 03:00:00",
      "F": "3",
      "D": "A",
      "T": "5",
      "W": "Heiðskírt",
      "N": "20",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-27 06:00:00",
      "F": "3",
      "D": "ANA",
      "T": "5",
      "W": "Heiðskírt",
      "N": "10",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-27 09:00:00",
      "F": "3",
      "D": "NA",
      "T": "4",
      "W": "Heiðskírt",
      "N": "10",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-27 12:00:00",
      "F": "3",
      "D": "NA",
      "T": "7",
      "W": "Heiðskírt",
      "N": "10",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-27 15:00:00",
      "F": "5",
      "D": "NNA",
      "T": "8",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-27 18:00:00",
      "F": "5",
      "D": "N",
      "T": "7",
      "W": "Léttskýjað",
      "N": "40",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-27 21:00:00",
      "F": "3",
      "D": "N",
      "T": "5",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-28 00:00:00",
      "F": "2",
      "D": "N",
      "T": "4",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-28 03:00:00",
      "F": "2",
      "D": "NA",
      "T": "2",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-28 06:00:00",
      "F": "1",
      "D": "NA",
      "T": "3",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-28 09:00:00",
      "F": "2",
      "D": "NNA",
      "T": "4",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-28 12:00:00",
      "F": "2",
      "D": "N",
      "T": "8",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-28 15:00:00",
      "F": "3",
      "D": "NNV",
      "T": "9",
      "W": "Heiðskírt",
      "N": "10",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-28 18:00:00",
      "F": "3",
      "D": "NNV",
      "T": "7",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "4",
      "R": "0.0"
    }, {
      "ftime": "2016-09-28 21:00:00",
      "F": "3",
      "D": "N",
      "T": "5",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-09-29 00:00:00",
      "F": "1",
      "D": "NA",
      "T": "4",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-29 03:00:00",
      "F": "0",
      "D": "Logn",
      "T": "2",
      "W": "Heiðskírt",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-29 06:00:00",
      "F": "1",
      "D": "NV",
      "T": "3",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-29 09:00:00",
      "F": "0",
      "D": "Logn",
      "T": "3",
      "W": "Skýjað",
      "N": "90",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-29 12:00:00",
      "F": "1",
      "D": "NV",
      "T": "5",
      "W": "Alskýjað",
      "N": "100",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-29 15:00:00",
      "F": "1",
      "D": "N",
      "T": "7",
      "W": "Alskýjað",
      "N": "100",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-29 18:00:00",
      "F": "1",
      "D": "NA",
      "T": "6",
      "W": "Alskýjað",
      "N": "100",
      "TD": "2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-29 21:00:00",
      "F": "2",
      "D": "ANA",
      "T": "4",
      "W": "Alskýjað",
      "N": "100",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-30 00:00:00",
      "F": "3",
      "D": "ANA",
      "T": "2",
      "W": "Skýjað",
      "N": "100",
      "TD": "-1",
      "R": "0.0"
    }, {
      "ftime": "2016-09-30 06:00:00",
      "F": "3",
      "D": "ANA",
      "T": "1",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "-2",
      "R": "0.0"
    }, {
      "ftime": "2016-09-30 12:00:00",
      "F": "3",
      "D": "NNA",
      "T": "5",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-09-30 18:00:00",
      "F": "4",
      "D": "NNA",
      "T": "5",
      "W": "Skýjað",
      "N": "100",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-10-01 00:00:00",
      "F": "3",
      "D": "NA",
      "T": "1",
      "W": "Alskýjað",
      "N": "90",
      "TD": "-1",
      "R": "0.0"
    }, {
      "ftime": "2016-10-01 06:00:00",
      "F": "3",
      "D": "NNA",
      "T": "1",
      "W": "Alskýjað",
      "N": "90",
      "TD": "-2",
      "R": "0.0"
    }, {
      "ftime": "2016-10-01 12:00:00",
      "F": "4",
      "D": "NNA",
      "T": "4",
      "W": "Alskýjað",
      "N": "100",
      "TD": "0",
      "R": "0.1"
    }, {
      "ftime": "2016-10-01 18:00:00",
      "F": "4",
      "D": "NA",
      "T": "4",
      "W": "Alskýjað",
      "N": "100",
      "TD": "-1",
      "R": "0.0"
    }, {
      "ftime": "2016-10-02 00:00:00",
      "F": "4",
      "D": "NA",
      "T": "1",
      "W": "Skýjað",
      "N": "40",
      "TD": "-2",
      "R": "0.0"
    }, {
      "ftime": "2016-10-02 06:00:00",
      "F": "3",
      "D": "ANA",
      "T": "1",
      "W": "Alskýjað",
      "N": "100",
      "TD": "-3",
      "R": "0.1"
    }, {
      "ftime": "2016-10-02 12:00:00",
      "F": "2",
      "D": "NA",
      "T": "4",
      "W": "Skýjað",
      "N": "80",
      "TD": "-3",
      "R": "0.0"
    }, {
      "ftime": "2016-10-02 18:00:00",
      "F": "2",
      "D": "NA",
      "T": "5",
      "W": "Léttskýjað",
      "N": "0",
      "TD": "1",
      "R": "0.0"
    }, {
      "ftime": "2016-10-03 00:00:00",
      "F": "3",
      "D": "NA",
      "T": "3",
      "W": "Skýjað",
      "N": "100",
      "TD": "0",
      "R": "0.0"
    }, {
      "ftime": "2016-10-03 06:00:00",
      "F": "5",
      "D": "NA",
      "T": "6",
      "W": "Skýjað",
      "N": "100",
      "TD": "1",
      "R": "0.3"
    }, {
      "ftime": "2016-10-03 12:00:00",
      "F": "4",
      "D": "NA",
      "T": "9",
      "W": "Skýjað",
      "N": "10",
      "TD": "3",
      "R": "0.2"
    }, {
      "ftime": "2016-10-03 18:00:00",
      "F": "6",
      "D": "NA",
      "T": "9",
      "W": "Skúrir",
      "N": "100",
      "TD": "3",
      "R": "0.0"
    }, {
      "ftime": "2016-10-04 00:00:00",
      "F": "5",
      "D": "NA",
      "T": "7",
      "W": "Lítils háttar rigning",
      "N": "90",
      "TD": "2",
      "R": "0.9"
    }],
    "id": "1",
    "valid": "1"
  }]
}
export default WeatherImg;