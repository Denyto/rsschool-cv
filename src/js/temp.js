import * as constants from './constants';

export function init(tempTomorrow, tempAfterTomorrow, tempNextDay, tempToday, tempFeelsLike) {
  [
    constants.daysTemp[0].innerText,
    constants.daysTemp[1].innerText,
    constants.daysTemp[2].innerText,
  ] = [
    tempTomorrow,
    tempAfterTomorrow,
    tempNextDay,
  ];
  constants.todayTemp.innerText = tempToday;
  constants.todayFeelsLike.innerHTML = `<p>FEELS LIKE: ${tempFeelsLike}</p>
        <div class="today__circle"></div>`;

  function convertFahrenheit(celsius) {
    return Math.round((1.8 * (+celsius)) + 32);
  }

  function convertTemp(el) {
    if (el.innerText === 'oF') {
      if (!el.classList.contains('options-button__temp_active')) {
        [
          constants.daysTemp[0].innerText,
          constants.daysTemp[1].innerText,
          constants.daysTemp[2].innerText,
          constants.todayTemp.innerText,
          constants.todayFeelsLike.innerHTML,
        ] = [
          convertFahrenheit(constants.daysTemp[0].innerText),
          convertFahrenheit(constants.daysTemp[1].innerText),
          convertFahrenheit(constants.daysTemp[2].innerText),
          convertFahrenheit(constants.todayTemp.innerText),
          `<p>${
            constants.todayFeelsLike.innerText.split(': ')[0]
          }: ${convertFahrenheit(constants.todayFeelsLike.innerText.split(': ')[1])}</p>
        <div class="today__circle"></div>`,
        ];
      }
    }
    if (el.innerText === 'oC') {
      [
        constants.daysTemp[0].innerText,
        constants.daysTemp[1].innerText,
        constants.daysTemp[2].innerText,
        constants.todayTemp.innerText,
        constants.todayFeelsLike.innerHTML,
      ] = [
        tempTomorrow,
        tempAfterTomorrow,
        tempNextDay,
        tempToday,
        `<p>${
          constants.todayFeelsLike.innerText.split(': ')[0]
        }: ${tempFeelsLike}</p>
        <div class="today__circle"></div>`,
      ];
    }
  }

  constants.btnTemp.forEach((elem) => elem.addEventListener('click', () => convertTemp(elem)));

  constants.btnTemp.forEach((item) => {
    item.addEventListener('click', () => {
      constants.btnTemp.forEach((elem) => elem.classList.remove('options-button__temp_active'));
      item.classList.add('options-button__temp_active');
    });
  });
}
