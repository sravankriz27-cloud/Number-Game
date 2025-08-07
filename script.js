"use strict";

const score0Elmnt = document.getElementById("score--0");
const score1Elmnt = document.getElementById("score--1");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const current1 = document.getElementById("current--1");
const current0 = document.getElementById("current--0");

const diceElmnt = document.querySelector(".dice");

score0Elmnt.textContent = 0;
score1Elmnt.textContent = 0;
diceElmnt.classList.add("hidden");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceElmnt.classList.remove("hidden");
  diceElmnt.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
