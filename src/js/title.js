import * as constants from './constants';

export function init(city) {
  const today = new Date();
  const weekDay = today.getDay();

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

  constants.titleCity.innerText = `${city}`;
  constants.titleDate.innerText = setDate();

  [
    constants.groupDays[0].innerText,
    constants.groupDays[1].innerText,
    constants.groupDays[2].innerText,
  ] = setDayWeek();

  function addZero(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function showTime() {
    const todayTime = new Date();
    const hour = todayTime.getHours();
    const min = todayTime.getMinutes();
    const sec = todayTime.getSeconds();

    constants.time.innerText = `${hour}:${addZero(min)}:${addZero(sec)}`;
  }

  setInterval(showTime, 1000);
}
