import * as constants from './constants';

export function init(city) {
  function setDate() {
    const today = new Date();
    return `${constants.week[today.getDay()]} ${today.getDate()} ${
      constants.months[today.getMonth()]
    }`;
  }
  constants.titleCity.innerText = `${city}`;
  constants.titleDate.innerText = setDate();
}
