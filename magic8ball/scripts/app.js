const magicBallElement = document.getElementById("magic-ball-result");
const questionElement = document.getElementById("greatQuestion42");
const resultElement = document.getElementById("magic-ball-result");
const userQuestionElement = document.getElementById("user-question");
const magicWaitingText =
  "Ask me anything!!";
let hasAskedQuestion = false;

magicBallElement.addEventListener("click", resetMagicBall);

function getPrediction() {
  const userQuestion = questionElement.value.trim();
  const predictionButton = document.querySelector(".prediction-btn");

  if (!userQuestion || hasAskedQuestion) {
    resultElement.innerText = magicWaitingText;
    userQuestionElement.innerText = "";
    magicBallElement.classList.remove("reset", "show-number");
  } else {
    const randomNumber = Math.floor(Math.random() * 8);
    const answers = [
      "I say yes .. but Im high. What do I know?",
      "Absolutely",
      "I doubt it",
      "Oh yes. For sure.",
      "Damn straight",
      "LOLz",
      "Your beard's weird",
      "Swipe left",
      "Fo Shizzle",
      "Signs point to yes",
      "In your dreams!",
      "What would Jesus do?",
      "We both know you're going to do it anyway",
      "You're fucked",
      "Sorry, I wasnt listening..",
      "Ask your mother",
      "That's illegal",
      "Talk to the hand",
      "When pigs fly",
      "A whole lot of nope",
    ];
    const magicBallResult = answers[randomNumber];
    userQuestionElement.innerText = `"${userQuestion}"  was an easy one!  Click on the Magic 8 Ball to ask me another question!.`;
    resultElement.innerText = magicBallResult;
    if (magicBallResult === magicWaitingText) {
      magicBallElement.classList.remove("show-number");
    } else {
      magicBallElement.classList.add("show-number");
    }
    magicBallElement.classList.add("reset");
    hasAskedQuestion = true;
    predictionButton.disabled = true;
  }
}

function resetMagicBall() {
  resultElement.innerText = "";
  userQuestionElement.innerText = "";
  magicBallElement.classList.remove("reset");
  questionElement.value = "";
  hasAskedQuestion = false;
  const predictionButton = document.querySelector(".prediction-btn");
  predictionButton.disabled = false;
}