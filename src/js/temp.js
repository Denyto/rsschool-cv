import * as constants from './constants';

export function init() {
  function convertFahrenheit(celsius) {
    return Math.round(1.8 * +celsius + 32);
  }

  function temp() {
    const [temp1, temp2, temp3, tempToday] = [
      constants.daysTemp[0].innerText,
      constants.daysTemp[1].innerText,
      constants.daysTemp[2].innerText,
      constants.todayTemp.innerText,
    ];
    constants.btnTemp.forEach((elem) => elem.addEventListener('click', () => {
      if (elem.innerText === 'oF') {
        if (!elem.classList.contains('options-button__temp_active')) {
          [
            constants.daysTemp[0].innerText,
            constants.daysTemp[1].innerText,
            constants.daysTemp[2].innerText,
            constants.todayTemp.innerText,
          ] = [
            convertFahrenheit(temp1),
            convertFahrenheit(temp2),
            convertFahrenheit(temp3),
            convertFahrenheit(tempToday),
          ];
        }
      }
      if (elem.innerText === 'oC') {
        [
          constants.daysTemp[0].innerText,
          constants.daysTemp[1].innerText,
          constants.daysTemp[2].innerText,
          constants.todayTemp.innerText,
        ] = [temp1, temp2, temp3, tempToday];
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
