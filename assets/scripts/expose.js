// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const select = document.querySelector("#horn-select");
  const playBtn = document.querySelector("button");
  playBtn.addEventListener("click", () => {
      const audio = document.querySelector("audio");
      audio.currentTime = 0;
      audio.play();
  
      if (select.value === "party-horn") {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
  });
  select.addEventListener("change", (event) => {
    const img = document.querySelector("img");
    const audio = document.querySelector("audio");
    if (event.target.value === "air-horn") {
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (event.target.value === "car-horn") {
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (event.target.value === "party-horn") {
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    } else {
      img.src = "assets/images/no-image.png";
    }
  });

  const vol = document.querySelector("#volume");
  vol.addEventListener("input", (event) => {
    const audio = document.querySelector("audio");
    const volIcon = document.querySelector("#volume-controls img");
    if (event.target.value == 0) {
      audio.volume = 0;
      volIcon.src = "assets/icons/volume-level-0.svg";
    } else if (event.target.value >= 1 && event.target.value < 33) {
      audio.volume = event.target.value / 100;
      volIcon.src = "assets/icons/volume-level-1.svg";
    } else if (event.target.value >= 33 && event.target.value < 67) {
      audio.volume = event.target.value / 100;
      volIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      audio.volume = event.target.value / 100;
      volIcon.src = "assets/icons/volume-level-3.svg";
    }
  });
}