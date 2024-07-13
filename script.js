(function () {
    var  gameModule = {
      players: [],
      moveOrder: false,
      winDeclared: false,
      init: function () {
        this.setPlayers()
      },
      setPlayers: function () {
        let player1 = playerModule.createPlayer('josh')
        let player2 = playerModule.createPlayer('123')
        this.players.push(player1,player2)
      },
      play: function (num) {
        boardModule.checkWin()
          let player = this.moveOrder == false ? this.players[0] : this.players[1];
         let valid = player.makeMove(num, marker = this.marker() )
         if (valid == null) {
          this.changeMove();
          console.log(this.moveOrder)
         } else {
          console.log(this.moveOrder)
         }
      },
      marker: function () {
       return this.moveOrder == false ? 'X' : 'O';
      },
      changeMove: function () {
        this.moveOrder = this.moveOrder == false;
      },
      declareWin: function () {
        this.winDeclared = true;
      }
      
    };
    let boardModule = {
      board: {
       1:'',2:'',3:'',
       4:'',5:'',6:'',
       7:'',8:'',9:''
      },
      checkWin: function () {
        const combinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
        let board = this.board
        for (const i in combinations) {
          const combo = combinations[i]
          const first = combo[0];
          const second = combo[1];
          const third = combo[2];
          if ((board[first] == 'X' || board[first] == 'O') && (board[second] == 'X' || board[second] == 'O') && (board[third] == 'X' || board[third] == 'O')) {
            console.log('win')
            return true;
          }
        }
        return false;
      },
     checkMove: function(num, marker){
      console.log(this.board[1])
      if (this.board[num] == ''){
        this.markCell(num,marker)
      }
      else {
        console.log('Invalid move!')
        return false;
      }
     },
     markCell: function (num,marker) {
       this.board[num] = marker;
       console.log(this.board)
     },
    }
  
    let playerModule = {
       createPlayer: function(name){
        const makeMove = (num,marker) => boardModule.checkMove(num,marker);
        return {name, makeMove}
      }
    }
  
    gameModule.setPlayers();
    boardModule.board[1] = 'X'
    boardModule.board[2] = 'X'
    boardModule.board[3] = 'X'
    gameModule.play(1);  
    
  
  })()