const words = [
  { word: "Kleidung", article: "die", reason: "ends with -ung (feminine)" },
  { word: "Stuhl", article: "der", reason: "masculine noun" },
  { word: "Tasse", article: "die", reason: "feminine noun" },
  { word: "Fenster", article: "das", reason: "neuter noun" },
  // Add more words here following the same format
];

let currentWord = 0;
let score = 0;

function showWord() {
  const word = words[currentWord];
  document.getElementById("word").textContent = word.word;
}

function checkAnswer(article) {
  const word = words[currentWord];
  const feedbackElement = document.getElementById("feedback");
  if (word.article === article) {
    feedbackElement.textContent = "Correct!";
    score++;
  } else {
    feedbackElement.textContent = `Incorrect. The correct article is "${word.article}" because ${word.reason}`;
  }
  feedbackElement.style.color = score === currentWord + 1 ? "green" : "red";
}

function nextWord() {
  currentWord++;
  if (currentWord === words.length) {
    currentWord = 0;
    score = 0;
  }
  showWord();
  document.getElementById("feedback").textContent = "";
}

showWord();

document.getElementById("der").addEventListener("click", () => checkAnswer("der"));
document.getElementById("die").addEventListener("click", () => checkAnswer("die"));
document.getElementById("das").addEventListener("click", () => checkAnswer("das"));
document.getElementById("next").addEventListener("click", nextWord);
