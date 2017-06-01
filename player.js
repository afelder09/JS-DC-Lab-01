class Player {
  constructor(name,hand){
    this.name = name
    this.hand = hand
  }

  discard(){
    return this.hand.pop()
  }

  addCards(cards){
    this.hand.unshift(cards)
  }
}

module.exports = Player

// const anson = new Player("Anson")
//
// console.log(anson)
