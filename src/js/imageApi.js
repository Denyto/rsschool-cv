import * as constants from './constants';

export function init(city) {
  const cityInner = city;

  function random(length) {
    return Math.round(Math.random() * length);
  }

  function getImage(str) {
    const lacation = str || cityInner;
    fetch(
      `https://pixabay.com/api/?key=22803653-ca6c414c80e4b5e1b9317fb1d&q=${lacation}&image_type=photo`,
    )
      .then((response) => response.json())
      .then((com) => {
        document.body.style.backgroundImage = `url("${
          com.hits[random(com.hits.length)].largeImageURL
        }")`;
      });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && constants.input.value !== '') {
      getImage(constants.input.value);
      constants.input.value = '';
    }
  });

  constants.btnRefresh.addEventListener('click', () => {
    constants.btnRefresh.classList.add('options-button__refresh_dis');
    setTimeout(
      () => constants.btnRefresh.classList.remove('options-button__refresh_dis'),
      500,
    );
    getImage();
  });

  getImage();
}
