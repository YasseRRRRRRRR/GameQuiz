const startingminutes = 5;
let time = startingminutes * 60;
let timerInterval;

const timerEl = document.getElementById('timer');
const submit = document.getElementById('after_begin');
const begin = document.getElementById('begin');

begin.addEventListener('click', function() {
    timerInterval = setInterval(start, 1000);
    start();
    begin.disabled = true;
    submit.style.visibility = "visible";
});

submit.addEventListener('click', function() {
    clearInterval(timerInterval); // Stop the timer interval
    checkAnswers();
});

function start() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    //to make it so it appears like 3:02 for example since when the seconds are < 10 they get kinda weird
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
        clearInterval(timerInterval); // Stop the timer when time reaches 0
        time = 0;
        checkAnswers();
    }
}

var score = document.querySelector("#score");
var answers = [
  "uncharted 4",
  "outlast",
  "doom",
  "monster hunter",
  "valorant",
  "not for broadcast",
  "dead by daylight",
  "dark souls 3",
  "the witcher 3",
  "sea of thieves"
];
var answerInputs = [
  document.querySelector("#answer1"),
  document.querySelector("#answer2"),
  document.querySelector("#answer3"),
  document.querySelector("#answer4"),
  document.querySelector("#answer5"),
  document.querySelector("#answer6"),
  document.querySelector("#answer7"),
  document.querySelector("#answer8"),
  document.querySelector("#answer9"),
  document.querySelector("#answer10")
];

function checkAnswers() {
  var correct = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answerInputs[i].value.toLowerCase() == answers[i]) {
      correct++;
    }
  }

  score.innerHTML = correct + "/10";

  // Reveal the correct answers
  for (var i = 0; i < answerInputs.length; i++) {
    answerInputs[i].value = answers[i];
  }
}
