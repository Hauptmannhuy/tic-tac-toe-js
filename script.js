


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
  const makeMove = () => Gameboard.markCell;
  return {name, makeMove}
}

Gameboard.displayBoard()

const josh = createPlayer('josh')

josh.makeMove()