import i18next from 'i18next';
import * as constants from './constants';

export function setLang() {
  constants.groupDays.forEach((elem) => {
    elem.innerHTML = i18next.t(elem.innerHTML);
  });
  constants.searchBtn.innerText = i18next.t(constants.searchBtn.innerText);
  constants.input.placeholder = 'Поиск по городу или почтовому индексу';
  constants.titleDate.innerHTML = `${i18next.t(
    constants.titleDate.innerHTML.split(' ')[0],
  )} ${constants.titleDate.innerHTML.split(' ')[1]} ${i18next.t(
    constants.titleDate.innerHTML.split(' ')[2],
  )}`;
  constants.todayFeelsLike.innerHTML = `<p>Ощущается как: ${
    constants.todayFeelsLike.innerText.split(': ')[1]
  }</p>
        <div class="today__circle"></div>`;
  constants.todayWind.innerText = `Ветер: ${constants.todayWind.innerText.split(': ')[1]}`;
  constants.todayHumidity.innerText = `Влажность: ${constants.todayHumidity.innerText.split(': ')[1]}`;
  constants.todayDescription.innerText = constants.objectRu.descriptionRu;
  constants.Latitude.innerText = `Широта: ${constants.Latitude.innerText.split(': ')[1]}`;
  constants.Longitude.innerText = `Долгота: ${constants.Longitude.innerText.split(': ')[1]}`;
  constants.titleCity.innerHTML = `${constants.objectRu.cityRu}, ${constants.objectRu.countryRu}`;
  console.log(constants.objectRu);
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
            Sun: 'Вск',
            Mon: 'Пнд',
            Tue: 'Втр',
            Wed: 'Срд',
            Thu: 'Чтв',
            Fri: 'Птн',
            Sat: 'Сбт',
            January: 'Января',
            February: 'Февраля',
            March: 'Марта',
            April: 'Апреля',
            May: 'Мая',
            June: 'Июня',
            July: 'Июля',
            August: 'Августа',
            September: 'Сентября',
            October: 'Октября',
            November: 'Ноября',
            December: 'Декабря',
            Latitude: 'Широта',
            Longitude: 'Долгота',
          },
        },
      },
      debug: false,
    })
    .then(() => {
      //   setLang();
    });
}
