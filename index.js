//import necessary files
const deck = require('./deck.js')
const player = require('./player.js')
const prompt = require('prompt');
const chalk = require('chalk')

//start the prompt
prompt.start()
//enter names

console.log("Its time to play war!")

prompt.get(['Player1','Player2'], function(err,result){
  //create new deck
  const playingDeck = new deck()
  //welcome the players


  //determine hand size
  const handSize = playingDeck.cards.length / 2

  //create player
  const player1 = new player(result.Player1,playingDeck.dealCards(handSize))
  const player2 = new player(result.Player2,playingDeck.dealCards(handSize))

  console.log("=========================LET THE WAR BEGIN===========================")
  console.log("Player 1: " + player1.name)
  console.log("--------------------------------vs-----------------------------------")
  console.log("Player 2: " + player2.name)

  //create a pot of cards that are up for grabs
  let pot = []
  let round = 0
  let winner

  //loop through rounds while each player has cards
  while(player1.hand.length!==0 && player2.hand.length!==0){
    round++
    console.log(chalk.green("+++++++++++++++++++++++++++++++++NEW ROUND NUMBER ", round))

    console.log("START Player 1 cards: ",player1.hand.length)
    console.log("START Player 2 cards: ",player2.hand.length)

    //initialize the cards that the players play this round
    player1Card = player1.discard()
    player2Card = player2.discard()

    console.log("Player 1 Card: ",player1Card.title)
    console.log("Player 2 Card: ",player2Card.title)

    //save this rounds score
    let player1Score = player1Card.score
    let player2Score = player2Card.score

    console.log("Player 1 Score: ",player1Score)
    console.log("Player 2 Score: ",player2Score)

    //add those cards to the pot
    pot.push(player1Card)
    pot.push(player2Card)
    console.log("Pot before win: ",pot.length)

    //clear player 1 and 2 cards. they are now in the pot
    player1Card = []
    player2Card = []

    if( player1Score > player2Score ){
      console.log(chalk.bgBlue("Player 1 won this round"))
      while (pot.length !== 0){
        player1.addCards(pot.splice(Math.floor(Math.random()*pot.length),1)[0])
      }
      pot = []
      winner = player1
    }
    else if(player2Score > player1Score){
      console.log(chalk.bgCyan("Player 2 won this round"))
      while (pot.length !== 0){
        player2.addCards(pot.splice(Math.floor(Math.random()*pot.length),1)[0])
      }
      pot = []
      winner = player2
    }
    else{
      console.log(chalk.bgRed("**************WAR"))
    }

    console.log("END Player 1 cards: ",player1.hand.length)
    console.log("END Player 2 cards: ",player2.hand.length)
    console.log("Pot after round: ", pot.length)
  }
  console.log(winner.name," won the war!")
})
