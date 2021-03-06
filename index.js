let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Mike",
  chips: 45
}

let playerEl = document.getElementById("player-el")
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

playerEl.textContent = player.name + ": $" + player.chips

function generateRandomInteger() {
  let randomNumber = Math.floor(Math.random() * 11) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  }
  return randomNumber;
}
// Create a new function called startGame() that calls renderGame()
const startGame = () => {
  isAlive = true
  let firstCard = generateRandomInteger();
  let secondCard = generateRandomInteger();
   cards =  [firstCard, secondCard]
   sum =  firstCard + secondCard
  renderGame();
};

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    alert("you are the man!!!! 🏆🏆🏆🎉")
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if(isAlive === true & hasBlackJack === false) {
    let card = generateRandomInteger()
sum += card
cards.push(card)
renderGame();
}
}
