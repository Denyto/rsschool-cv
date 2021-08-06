let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", toggleOpenActive));

function toggleOpenActive() {
  if (this.className.includes("open") || this.className.includes("open-active")) {
    this.classList.remove("open", "open-active");
    return;
  }
  panels.forEach((panel) => {
    panel.classList.remove("open", "open-active");
  });
  this.classList.toggle("open");
  this.classList.toggle("open-active");
}