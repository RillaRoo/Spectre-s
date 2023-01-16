let poemContainer = document.getElementById("poemcontainer");

// the array of possible words for the poem
const words = ["love", "heart", "flower", "sun", "moon", "sky", "ocean", "nature", "peace", "happiness"];

// the array of possible phrases for the poem
const phrases = ["The world is a beautiful place", "Life is a journey to be cherished", "Find the light in the darkness", "Take a chance on love", "Find peace in nature"];

function generateRandomPoem() {
  let generatedPoem = "";
  for (let i = 0; i < 5; i++) {
    // select a random word from the array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // select a random phrase from the array
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    generatedPoem +="<br><br>" + randomPhrase + " " + randomWord + "<br>";
  }
  // Update the poem container with the generated poem
  poemContainer.innerHTML = generatedPoem;
};
console.log(poemContainer);
generateRandomPoem();




