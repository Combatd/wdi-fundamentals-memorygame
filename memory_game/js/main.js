// array to store four cards
var cards = [ {
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}, 
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}, 
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}, 
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
} ];
var cardsInPlay = []; // empty array

// represent cards user flipped
var cardOne = cards[0]; // 1st ele of cards array
var cardTwo = cards[2]; // 2nd ele of cards array

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} else {
  		alert("Sorry, try again.");
	}
}

function flipCard(cardId) { // begin flipCard metthod
	cardsInPlay.push(cards[cardId].rank); // push to end of cardsInPlay
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

// check if there is 2 elements in cardsInPlay
	if (cardsInPlay.length === 2) {
		checkForMatch(); // call helper function
	}
} // end flipCard method
flipCard(0);
flipCard(2);

