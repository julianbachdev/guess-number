'use strict';

const between = 20;
let score = 10;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * between + 1);

const check = document
  .querySelector(`.check`)
  .addEventListener(`click`, function () {
    const myGuess = Number(document.querySelector(`.guess`).value);

    if (!myGuess || myGuess < 1 || myGuess > between) {
      document.querySelector(`.message`).textContent = `Invalid guess!`;
      return;
    }

    if (score === 0) {
      reset();
      return;
    }

    if (myGuess === secretNumber) correctGuess(myGuess);
    else incorrectGuess(myGuess);
  });

document.querySelector(`.again`).addEventListener(`click`, reset);

function reset() {
  secretNumber = Math.trunc(Math.random() * between + 1);
  score = 10;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.label-score`).textContent = `💯 Score: ${score}`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`body`).style.backgroundColor = `#222`;
}

function correctGuess(myGuess) {
  document.querySelector(`.message`).textContent = `Correct!`;
  document.querySelector(`.label-score`).textContent = `💯 Score: ${score}`;
  document.querySelector(`.number`).textContent = myGuess;
  document.querySelector(`body`).style.backgroundColor = `#9B6E47`;
  document.querySelector(`.guess`).value = ``;

  highScore = score > highScore ? score : highScore;
  document.querySelector(
    `.label-highscore`
  ).textContent = `🥇 Highscore: ${highScore}`;
}

function incorrectGuess(myGuess) {
  if (score === 1) {
    document.querySelector(`.message`).textContent = `You have Lost`;
    document.querySelector(`.label-score`).textContent = `💯 Score: ${--score}`;
  } else {
    document.querySelector(`.message`).textContent = `${
      myGuess > secretNumber ? `Too High` : `Too Low`
    }`;
    document.querySelector(`.label-score`).textContent = `💯 Score: ${--score}`;
  }
}
