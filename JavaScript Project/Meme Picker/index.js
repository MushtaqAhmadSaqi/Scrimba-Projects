import { catData } from "/data.js";

const radioButton = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotions = [];
  for (let emotions of cats) {
    for (let emotion of emotions.emotionTags) {
      console.log(emotion);
    }
  }
}

getEmotionsArray(catsData);

function renderEmotion(cats) {
  let toBeDisplay = "";

  for (let emotions of cats) {
    for (let emotion of emotions.emotionTags) {
      toBeDisplay += `<label class="emotion-label">${emotion}</label>
      <input type="radio" name="emotion" value="${emotion}" />`;
    }
  }
  radioButton.innerHTML = `${toBeDisplay}`;
}

renderEmotion(catsData);
