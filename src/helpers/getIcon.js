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
    case 'Logn':
      return '';
    case 'Heiðskírt':
      return 'wi-day-sunny'
  }
}
