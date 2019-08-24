// array to store four cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = []; // empty array

// represent cards user flipped
var cardOne = cards[0]; // 1st ele of cards array
var cardTwo = cards[2]; // 2nd ele of cards array

cardsInPlay.push(cardOne); // push to end of cardsInPlay
console.log('User flipped ' + cardOne);
cardsInPlay.push(cardTwo);
console.log('User flipped ' + cardTwo);

// check if there is 2 elements in cardsInPlay
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}