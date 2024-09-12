const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const messageEl = document.querySelector('.message');
const guessEl = document.querySelector('.guess');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const body = document.querySelector('body');
const confettiCanvas = document.getElementById('confetti');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function displayMessage(message) {
    messageEl.textContent = message;
  }
  
  function checkTheNumber() {
    const usersGuess = Number(guessEl.value);
  
    // Dacă nu există input sau input incorect
    if (!usersGuess || usersGuess < 1 || usersGuess > 20) {
      displayMessage('⛔ Invalid number! Enter a number between 1 and 20.');
    }
    // Dacă numărul ghicit este diferit de cel secret
    else if (usersGuess !== secretNumber) {
      if (score > 1) {
        displayMessage(usersGuess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        scoreEl.textContent = score;
        guessEl.value = '';
      } else {
        displayMessage('💥 You lost the game!');
        body.style.backgroundColor = '#ff0000';
        scoreEl.textContent = 0;
      }
    }
    // Dacă numărul ghicit este corect
    else {
      numberEl.textContent = secretNumber;
      displayMessage('🎉 Correct Number!');
      body.style.backgroundColor = '#60b347';
      
      if (score > highscore) {
        highscore = score;
        highscoreEl.textContent = highscore;
      }
      
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🎉', '💥', '🎈', '🔥'],
        emojiSize: 50,
        confettiNumber: 100,
      });
    }
  }

  againBtn.addEventListener('click', function () {
    // Resetăm valorile
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    scoreEl.textContent = score;
    numberEl.textContent = '?';
    guessEl.value = '';
    body.style.backgroundColor = '#222';
  });

  checkBtn.addEventListener('click', checkTheNumber);

  guessEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checkTheNumber();
    }
  });
  