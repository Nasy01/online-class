const messageEl = document.getElementById("message");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("p-value");
//const startBtn = document.getElementById("start-btn");
//const newBtn = document.getElementById("request-btn");
const pEl = document.getElementById("player-el");

let cards = [];
let player = {
	name: "Adah Godfrey",
	coins: 200,
	age: 30
}

let message = "";
let isAlive = true;
let isBlackJack = false;


let totalCards = 0;

function genCards() {
	let randomNumber = Math.floor((Math.random() * 11) + 1);
	if (randomNumber > 10) {
		return 1
	}
	else {
		return randomNumber;
	}
}

function renderCard() {
	for(let i = 0; i < cards.length; i++) {
	cardsEl.textContent += cards[i] + "  ";
	totalCards += cards[i];
}
	sumEl.textContent += totalCards;
	
	if (totalCards === 21) {
		message = "You won the game";
		isBlackJack = true;
	} else if (totalCards > 21) {
		message = "You are out of the game";
		isAlive = false;
	} else {
		message = "You are still in the game";
	}
	messageEl.textContent = message;

}

function startGame() {
	let firstCard = genCards();
	let secondCard = genCards();
	cards = [firstCard, secondCard];
	renderCard();
}

function drawCard() {
	if (isAlive === true && isBlackJack === false){
		let newCard = genCards();
		cards.push(newCard)
		cardsEl.textContent = "Cards: ";
		messageEl.textContent = "";
        pEl.textContent = "Adah Godfrey";
		sumEl.textContent = "Sum: ";
		renderCard();
	}
}