let firstCard = generateRandomInteger()
let secondCard = generateRandomInteger()
const cards = [firstCard,secondCard]

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function generateRandomInteger() {
  let randonNumber = Math.floor(Math.random() * 11) + 1;
  return randonNumber
}
// Create a new function called startGame() that calls renderGame()
const startGame = () => {
  renderGame()
}


function renderGame() {
  cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
      
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = generateRandomInteger()
    sum += card

    cards.push(card)
    renderGame()
}
