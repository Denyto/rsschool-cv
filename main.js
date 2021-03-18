function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown", playSound);
keys.forEach((key) =>
  key.addEventListener("click", function () {
    let keyPlay = document.querySelector(
      `audio[data-key="${key.dataset.key}"]`
    );
    key.classList.add("playing");
    keyPlay.currentTime = 0;
    keyPlay.play();
  })
);
