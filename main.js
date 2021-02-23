const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  namerrr = document.getElementById("name"),
  focus = document.getElementById("focus");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";

  time.textContent = `${hour}:${addZero(min)}:${addZero(sec)} ${amPm}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (n < 10 ? "0" : "") + n;
}

function setBgGreet() {
  let today = new Date();
  hour = today.getHours();

  if (hour < 12) {
    document.body.style.background = "url('./img/Morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.background = "url('./img/Afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.background = "url('./img/night.jpg')";
    greeting.textContent = "Good night";
    document.body.style.color = "white";
  }
}
function getName() {
  if (localStorage.getItem("name") === null) {
    namerrr.textContent = "[Введите свое имя]";
  } else {
    namerrr.textContent = localStorage.getItem("name");
  }
}
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Введите цель]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.kecode == 13) {
      localStorage.setItem("name", e.target.innerText);
      namerrr.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.kecode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}
namerrr.addEventListener("keypress", setName);
namerrr.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBgGreet();
getName();
getFocus();
