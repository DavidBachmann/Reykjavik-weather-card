export default function getIcon(text) {
  switch (text) {
    case 'Alskýjað':
      return 'wi-cloudy';
    case 'Skýjað':
      return 'wi-cloud';
    case 'Léttskýjað':
      return 'wi-cloud';
    case 'Rigning':
      return 'wi-rain';
    case 'Lítils háttar rigning':
      return 'wi-rain';
    case 'Heiðskírt':
      return 'wi-day-sunny'
    case 'Lítils háttar slydda':
      return 'wi-sleet'
    case 'Snjóél':
      return 'wi-rain-mix'
    case 'Snjókoma':
      return 'wi-snow'
    case 'Lítils háttar snjókoma':
      return 'wi-snow'
    case 'Skúrir':
      return 'wi-sprinkle'
    case 'Logn':
      return '';
  }
}
