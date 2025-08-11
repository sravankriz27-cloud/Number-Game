"use strict";

const player0Elmnt = document.querySelector(".player--0");
const player1Elmnt = document.querySelector(".player--1");

const score0Elmnt = document.getElementById("score--0");
const score1Elmnt = document.getElementById("score--1");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const current1 = document.getElementById("current--1");
const current0 = document.getElementById("current--0");

const diceElmnt = document.querySelector(".dice");

let score, playing, currentScore, activePlayer;

const init = function () {
  score = [0, 0];
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  score0Elmnt.textContent = 0;
  score1Elmnt.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceElmnt.classList.add("hidden");
  player0Elmnt.classList.remove("player--winner");
  player1Elmnt.classList.remove("player--winner");
  player0Elmnt.classList.add("player--active");
  player1Elmnt.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Elmnt.classList.toggle("player--active");
  player1Elmnt.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElmnt.classList.remove("hidden");
    diceElmnt.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] = score[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      playing = false;
      diceElmnt.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
