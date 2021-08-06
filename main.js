const btnTemp = document.querySelectorAll('.options-button__temp');
const btnRefresh = document.querySelector('.options-button__refresh');

btnTemp.forEach((item) => {
  item.addEventListener('click', () => {
    btnTemp.forEach((a) => a.classList.remove('options-button__temp_active'));
    item.classList.add('options-button__temp_active');
  });
});

function random(length) {
  return Math.round(Math.random() * length);
}

btnRefresh.addEventListener('click', () => {
  btnRefresh.classList.add('options-button__refresh_dis');
  setTimeout(
    () => btnRefresh.classList.remove('options-button__refresh_dis'),
    500,
  );
  fetch(
    'https://pixabay.com/api/?key=22803653-ca6c414c80e4b5e1b9317fb1d&q=summer&image_type=photo',
  )
    .then((response) => response.json())
    .then((com) => {
      document.body.style.backgroundImage = `url("${
        com.hits[random(com.hits.length)].largeImageURL
      }")`;
    });
});
