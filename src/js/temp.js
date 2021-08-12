import * as constants from './constants';

export function init() {
  function convertFahrenheit(celsius) {
    return Math.round(1.8 * +celsius + 32);
  }

  function temp() {
    constants.btnTemp.forEach((elem) => elem.addEventListener('click', () => {
      if (elem.innerText === 'oF') {
        if (!elem.classList.contains('options-button__temp_active')) {
          constants.daysTemp.forEach((elm) => {
            const el = elm;
            el.innerText = convertFahrenheit(el.innerText);
          });
        }
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
