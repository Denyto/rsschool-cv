import * as constants from './constants';

export function init({
  tempTomorrow, tempAfterTomorrow, tempNextDay, tempToday, tempFeelsLike,
}) {
  const lastSelectTemp = localStorage.getItem('lastSelectTemp');
  function toFahrenheit(celsius) {
    return Math.round(1.8 * +celsius + 32);
  }

  function setDefaultTemp() {
    [
      constants.daysTemp[0].innerText,
      constants.daysTemp[1].innerText,
      constants.daysTemp[2].innerText,
    ] = [tempTomorrow, tempAfterTomorrow, tempNextDay];
    constants.todayTemp.innerText = tempToday;
    constants.todayFeelsLike.innerHTML = `<p>FEELS LIKE: ${tempFeelsLike}</p>
        <div class="today__circle"></div>`;
    constants.btnTemp[1].classList.add('options-button__temp_active');
  }

  function setFahrenheitTemp() {
    [
      constants.daysTemp[0].innerText,
      constants.daysTemp[1].innerText,
      constants.daysTemp[2].innerText,
      constants.todayTemp.innerText,
      constants.todayFeelsLike.innerHTML,
    ] = [
      toFahrenheit(tempTomorrow),
      toFahrenheit(tempAfterTomorrow),
      toFahrenheit(tempNextDay),
      toFahrenheit(tempToday),
      `<p>FEELS LIKE: ${toFahrenheit(tempFeelsLike)}</p>
        <div class="today__circle"></div>`,
    ];
    constants.btnTemp[0].classList.add('options-button__temp_active');
  }

  if (lastSelectTemp === 'oF') {
    setFahrenheitTemp();
  } else {
    setDefaultTemp();
  }

  function convert(el) {
    if (
      el.innerText === 'oF'
    && el.classList.contains('options-button__temp_active')
    ) {
      setFahrenheitTemp();
    }
    if (
      el.innerText === 'oC'
    && el.classList.contains('options-button__temp_active')
    ) {
      setDefaultTemp();
    }
  }
  constants.btnTemp.forEach((elem) => elem.addEventListener('click', () => {
    convert(elem);
  }));
}
