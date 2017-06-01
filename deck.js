//import card class
const card = require('./card.js')

//declare ranks and suits
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

//create class of deck
class Deck{
  constructor(){
    this.cards = []
    this.createDeck()
  }

  createDeck(){
    for(let i=0;i<suits.length;i++){
      for(let j=0;j<ranks.length;j++){
        const newCard = new card(suits[i],ranks[j])
        this.cards.push(newCard)
      }
    }
  }

  dealCards(num){
    let dealtCards = []
    for(let i=0;i<num;i++){
      const index = Math.floor(Math.random() * this.cards.length);
      const card = this.cards.splice(index,1)[0];
      dealtCards.push(card)
    }
    return dealtCards
  }
}

//test
// const fullDeck = new Deck()
// // console.log(fullDeck)
// console.log(fullDeck.dealCards(3).length)

module.exports = Deck
