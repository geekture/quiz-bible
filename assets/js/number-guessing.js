
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let teksKonsin = document.querySelector('.teks-konsin');
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
let guessFieldLabel = document.querySelector('.guessFieldLabel');

let successSound = document.querySelector('.successSound');
let faildSound = document.querySelector('.faildSound');
let gameOver = document.querySelector('.gameOver');

let successIcon = document.querySelector('.successIcon');
let gameoverIcon = document.querySelector('.gameoverIcon');

let guessCount = 1;
let resetButton;



function playSuccessSound() {

  successSound.play();
}

function playFaildSound() {

  faildSound.play();
}

function playGameOverSound() {

  gameOver.play();
}

function checkGuess() {

  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Chif ou sot chwazi yo : ';
    guesses.classList.add("text","text-warning");
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber) {
    successIcon.style.display = 'inherit';
    lastResult.textContent = 'Bravo, ou jwenn bon chif la !';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    guesses.textContent = '';
    playSuccessSound();
    setGameOver();
  } else if (guessCount === 10) {
     gameoverIcon.style.display = 'inherit';
     lastResult.textContent = '!!! Ou pèdi !!!';
     playGameOverSound();
     setGameOver();
  } else {
     
     lastResult.textContent = 'Chif ou antre an pa bon.';
     lastResult.style.backgroundColor = 'red';
    
     if (userGuess < randomNumber) {
      teksKonsin.style.display = 'none';
      lastResult.textContent += ' Li twò piti !';
     } else if (userGuess > randomNumber) {
      teksKonsin.style.display = 'none';
      lastResult.textContent += ' Li twò gwo !';
     }
      playFaildSound();
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessFieldLabel.style.display = 'none';
  guessField.style.display = 'none';
  guessSubmit.style.display = 'none';
  resetButton = document.createElement('button');
  resetButton.textContent = 'Rekòmanse jwe';
  resetButton.classList.add("row","btn", "btn-block", "text-primary");
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  teksKonsin.style.display = 'inherit';
  successIcon.style.display = 'none';
  gameoverIcon.style.display = 'none';
  guessFieldLabel.style.display = 'inherit';
  guessField.style.display = 'inherit';
  guessSubmit.style.display = 'inherit';
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}