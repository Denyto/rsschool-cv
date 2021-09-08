import i18next from 'i18next';
import * as constants from './constants';

export function setLang() {
  constants.groupDays.forEach((elem) => { elem.innerHTML = i18next.t(elem.innerHTML); });
  constants.searchBtn.innerText = i18next.t(constants.searchBtn.innerText);
  constants.input.placeholder = 'Поиск по городу или почтовому индексу';
}

export default function () {
  i18next
    .init({
      lng: 'ru',
      resources: {
        ru: {
          translation: {
            Sunday: 'Воскресенье',
            Monday: 'Понедельник',
            Tuesday: 'Вторник',
            Wednesday: 'Среда',
            Thursday: 'Четверг',
            Friday: 'Пятница',
            Saturday: 'Суббота',
            feelslike: 'Ощущается',
            SEARCH: 'поиск',
          },
        },
      },
      debug: false,
    })
    .then(() => {
    //   setLang();
    });
}
