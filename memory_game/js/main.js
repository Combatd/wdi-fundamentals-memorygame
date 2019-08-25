// array to store four cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = []; // empty array

// represent cards user flipped
var cardOne = cards[0]; // 1st ele of cards array
var cardTwo = cards[2]; // 2nd ele of cards array

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) { // begin flipCard metthod
	cardsInPlay.push(cards[cardId]); // push to end of cardsInPlay
	console.log('User flipped ' + cards[cardId]);
	

// check if there is 2 elements in cardsInPlay
	if (cardsInPlay.length === 2) {
		checkForMatch(); // call helper function
	}
} // end flipCard method
flipCard(0);
flipCard(2);

