


const Gameboard = (function(){
  let board = [ 
    ['','',''],
    ['','',''],
    ['','','']
  ];
  const displayBoard = function(){
    for (let i = 0; i < board.length; i++) {
      const element = board[i];
      console.log(element)
    };
  };
  const markCell = () => console.log('Board marked');
  return {
    displayBoard,
    markCell,
  }
})();

function createPlayer(name){
  const makeMove = () => Gameboard.markCell();
  return {name, makeMove}
}
const gameFlow = (function () {
  var  gameModule = {
    players: [],
    moveOrder: false,
    winDeclared: false,
    init: function () {
      this.setPlayers()
      this.play()
    },
    setPlayers: function () {
      let player1 = createPlayer(prompt)
      let player2 = createPlayer(prompt)
      this.players.push(player1,player2)
    },
    play: function () {
      while (this.winDeclared == false) {
        
      }
    },
    changeMove: function () {
      this.moveOrder = this.moveOrder == false;
    },
    declareWin: function () {
      this.winDeclared = true;
    },
     
  }

})()

Gameboard.displayBoard()

const josh = createPlayer('josh')

josh.makeMove()