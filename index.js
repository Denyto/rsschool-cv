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

groups.map((item) => {createAudio(item);
  createKbds(item)});

function createAudio(obj) {
  let audio = document.createElement("audio");
  audio.setAttribute("data-key", `${obj.key.charCodeAt(0)}`);
  audio.src = `${obj.url}`;
  document.body.prepend(audio);
}

function createKbds(obj) {
  let createKbd = document.createElement("kbd");
  createKbd.innerHTML = obj.key;
  let divData = document.createElement("div");
  divData.className = "key";
  divData.setAttribute("data-key", `${obj.key.charCodeAt(0)}`);
  let createSpan = document.createElement("span");
  createSpan.className = "sound";
  createSpan.innerHTML = obj.name;
  divData.append(createSpan);
  divData.prepend(createKbd);
  divKeys.append(divData);
}
