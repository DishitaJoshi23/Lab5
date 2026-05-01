// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectVoice = document.querySelector("#voice-select");
  const playBtn = document.querySelector("button");
  const face = document.querySelector("img");
  const synthesis = window.speechSynthesis;

  function populateVoices() {
    const values = synthesis.getVoices();
    for (let i = 0; i < values.length; i++){
      const option = document.createElement("option");
      option.textContent = values[i].name + " (" + values[i].lang + ")";
      option.setAttribute("data-lang", values[i].lang);
      option.setAttribute("data-name", values[i].name);
      selectVoice.appendChild(option);
      
    }
  }
  populateVoices();
  synthesis.addEventListener("voiceschanged", populateVoices);
  
  playBtn.addEventListener("click", () => {
    //getting the user text
    const text = document.querySelector("textarea").value;
    const utterance = new SpeechSynthesisUtterance(text);
    
    // set the selected voice
    const selectedOption = selectVoice.selectedOptions[0];
    const voices = synthesis.getVoices();
    const voice = voices.find(v => v.name === selectedOption.getAttribute("data-name"));
    utterance.voice = voice;
    
    //begins speaking
    utterance.onstart = () =>{
      face.src = "assets/images/smiling-open.png";
    }

    //stops speaking
    utterance.onend = () => {
      face.src = "assets/images/smiling.png";
    }

    synthesis.speak(utterance);
  });

  selectVoice.addEventListener("change", (event) => {
    const audio = document.querySelector("audio");
    
  })
  
}