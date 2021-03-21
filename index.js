let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => panel.addEventListener("click", toggleActive));

function toggleOpen() {
  if (this.className.includes("open")) {
    this.classList.remove("open");
    return;
  }
  panels.forEach((panel) => panel.classList.remove("open"));
  this.classList.toggle("open");
}

function toggleActive() {
  if (this.className.includes("open-active")) {
    this.classList.remove("open-active");
    return;
  }
  panels.forEach((panel) => panel.classList.remove("open-active"));
  this.classList.toggle("open-active");
}
