const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 13, queen: 12 }

class Card{
  constructor(suit,rank){
    this.suit = suit
    this.rank = rank
    this.title = rank + " of " + suit
    this.score = rankScores[rank]
  }
}

// const card = new Card("heart","ten")
//
// console.log(card)

module.exports = Card
