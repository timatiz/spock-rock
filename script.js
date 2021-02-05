import { startConfetti, removeConfetti, stopConfetti } from "./confetti.js"

const playerScoreEl = document.getElementById("playerScore")
const playerChoiceEl = document.getElementById("playerChoice")
const computerScoreEl = document.getElementById("computerScore")
const computerChoiceEl = document.getElementById("computerChoice")
const resultText = document.getElementById("resultText")

const playerRock = document.getElementById("playerRock")
const playerScissors = document.getElementById("playerScissors")
const playerPaper = document.getElementById("playerPaper")
const playerSpock = document.getElementById("playerSpock")
const playerLizard = document.getElementById("playerLizard")

const computerRock = document.getElementById("computerRock")
const computerScissors = document.getElementById("computerScissors")
const computerPaper = document.getElementById("computerPaper")
const computerSpock = document.getElementById("computerSpock")
const computerLizard = document.getElementById("computerLizard")

const allGameIcons = document.querySelectorAll(".far")

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
}

let playerScoreNumber = 0
let computerScoreNumber = 0
let computerChoice = ""

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((i) => {
    i.classList.remove("selected")
  })
}

function resetScores() {
  playerScoreNumber = 0
  computerScoreNumber = 0
  playerScoreEl.textContent = playerScoreNumber
  computerScoreEl.textContent = computerScoreNumber
}

// Reset Score & playerChoice & playerChoice
function resetAll() {
  resetSelected()
  resultText.textContent = "Choose your icon"
  resetScores()
}

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random()
  if (computerChoiceNumber < 0.2) {
    return (computerChoice = "rock")
  } else if (computerChoiceNumber <= 0.4) {
    return (computerChoice = "scissors")
  } else if (computerChoiceNumber <= 0.6) {
    return (computerChoice = "paper")
  } else if (computerChoiceNumber <= 0.8) {
    return (computerChoice = "spock")
  } else {
    return (computerChoice = "lizard")
  }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected")
      computerChoiceEl.textContent = " --- Rock"
      break
    case "scissors":
      computerScissors.classList.add("selected")
      computerChoiceEl.textContent = " --- Scissors"
      break
    case "paper":
      computerPaper.classList.add("selected")
      computerChoiceEl.textContent = " --- Paper"
      break
    case "spock":
      computerSpock.classList.add("selected")
      computerChoiceEl.textContent = " --- Spock"
      break
    case "lizard":
      computerLizard.classList.add("selected")
      computerChoiceEl.textContent = " --- Lizard"
      break
    default:
      break
  }
}

// Check Result, increase scores, update resultText
function updateScore(playerChoice) {
  stopConfetti()
  removeConfetti()
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie."
  } else {
    const choice = choices[playerChoice]
    if (choice.defeats.includes(computerChoice)) {
      resultText.textContent = "You win!"
      playerScoreNumber++
      playerScoreEl.textContent = playerScoreNumber
      computerScoreEl.textContent = computerScoreNumber
      startConfetti()
    } else {
      resultText.textContent = "You lose!"
      computerScoreNumber++
      computerScoreEl.textContent = computerScoreNumber
      playerScoreEl.textContent = playerScoreNumber
    }
  }
}

// CAll functions to process turn
function checkResult(playerChoice) {
  resetSelected()
  computerRandomChoice()
  displayComputerChoice()
  updateScore(playerChoice)
}

// Passing player selection value and styling icon
function select(playerChoice) {
  checkResult(playerChoice)
  // add 'selected' styling & playerChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected")
      playerChoiceEl.textContent = " --- Rock"
      break
    case "scissors":
      playerScissors.classList.add("selected")
      playerChoiceEl.textContent = " --- Scissors"
      break
    case "paper":
      playerPaper.classList.add("selected")
      playerChoiceEl.textContent = " --- Paper"
      break
    case "spock":
      playerSpock.classList.add("selected")
      playerChoiceEl.textContent = " --- Spock"
      break
    case "lizard":
      playerLizard.classList.add("selected")
      playerChoiceEl.textContent = " --- Lizard"
      break
    default:
      break
  }
}
window.select = select

// ON startup set initial
resetAll()
