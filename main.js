function app() {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");
  const sounds = document.querySelectorAll(".sound-picker button");
  const timeDisplay = document.querySelector(".time-display");
  const outlineLength = outline.getTotalLength();
  let fakeDuration = 600;
  const timeSelect = document.querySelectorAll(".time-select button");

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  play.addEventListener("click", checkPlaying);

  sounds.forEach((sound) => {
    sound.addEventListener("click", function () {
      song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      checkPlaying();
    });
  });

  timeSelect.forEach((Option) => {
    Option.addEventListener("click", function () {
      fakeDuration = this.getAttribute("data-time");
      song.currentTime = 0;
        timeDisplay.textContent = `${addZero(
          Math.floor(fakeDuration / 60)
        )}:${addZero(Math.floor(fakeDuration % 60))}`;      
    });
  });

  function checkPlaying() {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  }

  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let second = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
    timeDisplay.textContent = `${addZero(minutes)}:${addZero(second)}`;
    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
  };
}

function addZero(n) {
  return (n < 10 ? "0" : "") + n;
}

app();
