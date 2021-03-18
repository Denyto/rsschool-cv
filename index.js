const numKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const urlSongs = [
  "./sounds/clap.wav",
  "./sounds/hihat.wav",
  "./sounds/kick.wav",
  "./sounds/openhat.wav",
  "./sounds/boom.wav",
  "./sounds/ride.wav",
  "./sounds/snare.wav",
  "./sounds/tom.wav",
  "./sounds/tink.wav",
];
const nameKeys = ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink'];

let divContainer = document.createElement("div");
divContainer.className = "container";
let divKeys = document.createElement("div");
divKeys.className = "keys";
divContainer.prepend(divKeys);
document.body.prepend(divContainer);

for (let i = 0; i < numKeys.length; i++) {
  let arrAudio = document.createElement("audio");
  arrAudio.setAttribute("data-key", `${numKeys[i].charCodeAt(0)}`);
  arrAudio.src = `${urlSongs[i]}`;
  document.body.prepend(arrAudio);
  createKbds(numKeys, nameKeys, i);
}

function createKbds(arr1, arr2, n) {
  let createKbd = document.createElement("kbd");
  let divData = document.createElement("div");
  let createSpan = document.createElement("span");
  createSpan.className = 'sound';
  createSpan.innerHTML = arr2[n];
  divData.setAttribute("data-key", `${numKeys[n].charCodeAt(0)}`);
  divData.className = "key";
  divData.append(createSpan);
  divData.prepend(createKbd);
  createKbd.innerHTML = arr1[n];
  divKeys.append(divData);
}
