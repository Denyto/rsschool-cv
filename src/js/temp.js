import * as constants from './constants';

export function init(temperature) {
  function convertFahrenheit(celsius) {
    return Math.round(1.8 * +celsius + 32);
  }

  function temp() {
    const [temp1, temp2, temp3, tempToday, tempFeelsLike] = [
      constants.daysTemp[0].innerText,
      constants.daysTemp[1].innerText,
      constants.daysTemp[2].innerText,
      constants.todayTemp.innerText,
      temperature,
    ];
    constants.btnTemp.forEach((elem) => elem.addEventListener('click', () => {
      if (elem.innerText === 'oF') {
        if (!elem.classList.contains('options-button__temp_active')) {
          [
            constants.daysTemp[0].innerText,
            constants.daysTemp[1].innerText,
            constants.daysTemp[2].innerText,
            constants.todayTemp.innerText,
            constants.todayFeelsLike.innerHTML,
          ] = [
            convertFahrenheit(temp1),
            convertFahrenheit(temp2),
            convertFahrenheit(temp3),
            convertFahrenheit(tempToday),
            `<p>FEELS LIKE: ${convertFahrenheit(tempFeelsLike)}</p>
        <div class="today__circle"></div>`,
          ];
        }
      }
      if (elem.innerText === 'oC') {
        [
          constants.daysTemp[0].innerText,
          constants.daysTemp[1].innerText,
          constants.daysTemp[2].innerText,
          constants.todayTemp.innerText,
          constants.todayFeelsLike.innerHTML,
        ] = [
          temp1,
          temp2,
          temp3,
          tempToday,
          `<p>FEELS LIKE: ${tempFeelsLike}</p>
        <div class="today__circle"></div>`,
        ];
      }
    }));
  }
  temp();

  constants.btnTemp.forEach((item) => {
    item.addEventListener('click', () => {
      constants.btnTemp.forEach((elem) => elem.classList.remove('options-button__temp_active'));
      item.classList.add('options-button__temp_active');
    });
  });
}
