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

let score = document.querySelector("#score");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var answer5 = document.querySelector("#answer5");
var answer6 = document.querySelector("#answer6");
var answer7 = document.querySelector("#answer7");
var answer8 = document.querySelector("#answer8");
var answer9 = document.querySelector("#answer9");
var answer10 = document.querySelector("#answer10");

function checkAnswers() {
    var correct = 0;
    if (answer1.value.toLowerCase() == "uncharted 4") {
        correct++;
    }
    if (answer2.value.toLowerCase() == "outlast") {
        correct++;
    }
    if (answer3.value.toLowerCase() == "doom") {
        correct++;
    }
    if (answer4.value.toLowerCase() == "monster hunter") {
        correct++;
    }
    if (answer5.value.toLowerCase() == "valorant") {
        correct++;
    }
    if (answer6.value.toLowerCase() == "not for broadcast") {
        correct++;
    }
    if (answer7.value.toLowerCase() == "dead by daylight") {
        correct++;
    }
    if (answer8.value.toLowerCase() == "dark souls 3") {
        correct++;
    }
    if (answer9.value.toLowerCase() == "the witcher 3") {
        correct++;
    }
    if (answer10.value.toLowerCase() == "sea of thieves") {
        correct++;
    }

    score.innerHTML = correct + "/10";

    // Reveal the correct answers
    answer1.value = "Uncharted 4";
    answer2.value = "Outlast";
    answer3.value = "Doom";
    answer4.value = "Monster Hunter";
    answer5.value = "Valorant";
    answer6.value = "Not for Broadcast";
    answer7.value = "Dead by Daylight";
    answer8.value = "Dark Souls 3";
    answer9.value = "The Witcher 3";
    answer10.value = "Sea of Thieves";
}