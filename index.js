let firstCard = 10
let secondCard = 4
const cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Create a new function called startGame() that calls renderGame()
const startGame = () => {
  renderGame()
}


function renderGame() {
  
    sumEl.textContent = "Sum: " + sum
    // for (let i = 0; i < cards.length; i++) {
    //   cardsEl.textContent = "Cards: " + cards
      
    // }
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
    let card = 6
    sum += card

    cards.push(card)
    renderGame()
}
