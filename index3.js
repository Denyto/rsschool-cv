let groups = [
  { key: "A", url: "./sounds/clap.wav", name: "clap" },
  { key: "S", url: "./sounds/hihat.wav", name: "hihat" },
  { key: "D", url: "./sounds/kick.wav", name: "kick" },
  { key: "F", url: "./sounds/openhat.wav", name: "openhat" },
  { key: "G", url: "./sounds/boom.wav", name: "boom" },
  { key: "H", url: "./sounds/ride.wav", name: "ride" },
  { key: "J", url: "./sounds/snare.wav", name: "snare" },
  { key: "K", url: "./sounds/tom.wav", name: "tom" },
  { key: "L", url: "./sounds/tink.wav", name: "tink" },
];

let divContainer = document.createElement("div");
divContainer.className = "container";
let divKeys = document.createElement("div");
divKeys.className = "keys";
divContainer.prepend(divKeys);
document.body.prepend(divContainer);
let divData;

groups.map((item) => createAudio(item));
groups.map((item) => createDivData(item));

function createAudio(obj) {
  let audio = document.createElement("audio");
  audio.setAttribute("data-key", `${obj.key.charCodeAt(0)}`);
  audio.src = `${obj.url}`;
  document.body.prepend(audio);
}

function createDivData(obj) {
  divData = document.createElement("div");
  divData.setAttribute("data-key", `${obj.key.charCodeAt(0)}`);
  divData.className = "key";
  divKeys.append(divData);
  divData.append(createKbd(obj.key));
  divData.append(createSpan(obj.name));
}

function createKbd(letter) {
  let kbd = document.createElement("kbd");
  kbd.innerHTML = letter;
  return kbd;
}

function createSpan(string) {
  let span = document.createElement("span");
  span.className = "sound";
  span.innerHTML = string;
  return span;
}
