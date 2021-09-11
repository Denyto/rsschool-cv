import i18next from 'i18next';
import * as constants from './constants';

export function setLang() {
  constants.groupDays.forEach((elem) => {
    elem.innerHTML = i18next.t(elem.innerHTML);
  });
  constants.searchBtn.innerText = i18next.t(constants.searchBtn.innerText);
  constants.input.placeholder = 'Поиск по городу или почтовому индексу';
  constants.titleDate.innerHTML = `${i18next.t(
    constants.titleDate.innerHTML.split(' ')[0]
  )} ${constants.titleDate.innerHTML.split(' ')[1]} ${i18next.t(
    constants.titleDate.innerHTML.split(' ')[2]
  )}`;
  constants.todayFeelsLike.innerHTML = `<p>Ощущается как: ${
    constants.todayFeelsLike.innerText.split(': ')[1]
  }</p>
        <div class="today__circle"></div>`;
  constants.todayWind.innerText = `Ветер: ${constants.todayWind.innerText.split(': ')[1]}`;
  constants.todayHumidity.innerText = `Влажность: ${constants.todayHumidity.innerText.split(': ')[1]}`;
  constants.todayDescription.innerText = constants.descriptionRu;
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
            Sund: 'Вск',
            Mon: 'Пнд',
            Tue: 'Втр',
            Wed: 'Срд',
            Thu: 'Чтв',
            Fri: 'Птн',
            Sat: 'Сбт',
            January: 'Январь',
            February: 'Февраль',
            March: 'Март',
            April: 'Апрель',
            May: 'Май',
            June: 'Июнь',
            July: 'Июль',
            August: 'Август',
            September: 'Сентябрь',
            October: 'Октябрь',
            November: 'Ноябрь',
            December: 'Декабрь',
          },
        },
      },
      debug: false,
    })
    .then(() => {
      //   setLang();
    });
}
