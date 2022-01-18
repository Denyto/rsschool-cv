import * as constants from './constants';

const today = new Date();
const weekDay = today.getDay();
let timeID = null;

export function init(latLon, city) {
  fetch(`https://weatherapi-com.p.rapidapi.com/timezone.json?q=${latLon}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': 'afdefe152dmsh45cc985d6215143p167aaajsn66072671961c',
    },
  })
    .then((response) => response.json())
    .then((com) => {
      constants.titleCity.innerText = city
        ? `${city}, ${com.location.country}`
        : `${com.location.name}, ${com.location.country}`;
    });

  function setDate() {
    return `${constants.week[weekDay].substring(0, 3)} ${today.getDate()} ${
      constants.months[today.getMonth()]
    }`;
  }

  function setDayWeek() {
    if (weekDay === 4) {
      return [constants.week[5], constants.week[6], constants.week[0]];
    }
    if (weekDay === 5) {
      return [constants.week[6], constants.week[0], constants.week[1]];
    }
    if (weekDay === 6) {
      return [constants.week[0], constants.week[1], constants.week[2]];
    }
    return [
      constants.week[weekDay + 1],
      constants.week[weekDay + 2],
      constants.week[weekDay + 3],
    ];
  }

  constants.titleDate.innerText = setDate();

  [
    constants.groupDays[0].innerText,
    constants.groupDays[1].innerText,
    constants.groupDays[2].innerText,
  ] = setDayWeek();
}

function addZero(n) {
  return (n < 10 ? '0' : '') + n;
}

function showTime(utc) {
  const todayTime = new Date();
  const hourTimezone = todayTime.getUTCHours() + utc / 3600;
  const hour = hourTimezone < 0 ? (24 + hourTimezone) % 24 : hourTimezone % 24;
  const min = todayTime.getUTCMinutes();
  const sec = todayTime.getUTCSeconds();
  constants.time.innerText = `${hour}:${addZero(min)}:${addZero(sec)}`;
}

export function setTime(u) {
  constants.time.innerText = '-- : -- : --';
  clearInterval(timeID);
  timeID = setInterval(() => {
    showTime(u);
  }, 1000);
  constants.time.innerText = '-- : -- : --';
}

export function setWeatherCurrentIcon(str) {
  const node = document.createElement('div');
  const node2 = document.createElement('div');
  switch (str) {
    case '01d':
      node.classList.add('sunny');
      break;
    case '02d':
      node.classList.add('sunny');
      node2.classList.add('cloudy');
      break;
    case '03d':
    case '03n':
      node.classList.add('cloudy');
      break;
    case '04d':
    case '04n':
      node.classList.add('overcastcloudy');
      break;
    case '09d':
    case '09n':
      node.classList.add('rainy');
      node2.classList.add('cloudy');
      break;
    case '10d':
      node.classList.add('sunny');
      node2.classList.add('rainy');
      break;
    case '11d':
    case '11n':
      node2.classList.add('stormy');
      break;
    case '13d':
    case '13n':
      node2.classList.add('snowy');
      break;
    case '01n':
      node2.classList.add('starry');
      break;
    case '02n':
      node.classList.add('cloudy');
      node2.classList.add('starry');
      break;
    case '10n':
      node.classList.add('rainy');
      node2.classList.add('starry');
      break;
    default:
      break;
  }
  constants.todayIcons.innerHTML = '';
  constants.todayIcons.append(node);
  constants.todayIcons.append(node2);
}

export function setWeatherGroupIcon(a, b, c) {
  [a, b, c].forEach((code, index) => {
    const fragment = document.createDocumentFragment();
    const node = document.createElement('div');
    const node2 = document.createElement('div');
    switch (code) {
      case '01d':
        node.classList.add('group-days__icons_sunny');
        break;
      case '02d':
        node.classList.add('group-days__icons_sunny');
        node2.classList.add('group-days__icons_cloudy');
        break;
      case '03d':
      case '03n':
        node.classList.add('group-days__icons_cloudy');
        break;
      case '04d':
      case '04n':
        node.classList.add('group-days__icons_overcastcloudy');
        break;
      case '09d':
      case '09n':
        node.classList.add('group-days__icons_rainy');
        node2.classList.add('group-days__icons_cloudy');
        break;
      case '10d':
        node.classList.add('group-days__icons_sunny');
        node2.classList.add('group-days__icons_rainy');
        break;
      case '11d':
      case '11n':
        node2.classList.add('group-days__icons_stormy');
        break;
      case '13d':
      case '13n':
        node2.classList.add('group-days__icons_snowy');
        break;
      case '01n':
        node2.classList.add('group-days__icons_starry');
        break;
      case '02n':
        node.classList.add('group-days__icons_cloudy');
        node2.classList.add('group-days__icons_starry');
        break;
      case '10n':
        node.classList.add('group-days__icons_rainy');
        node2.classList.add('group-days__icons_starry');
        break;
      default:
        break;
    }
    fragment.append(node);
    fragment.append(node2);
    constants.groupIcons[index].innerHTML = '';
    constants.groupIcons[index].append(fragment);
  });
}
