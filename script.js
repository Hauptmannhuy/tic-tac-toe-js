(function () {
    var  gameModule = {
      players: [],
      moveOrder: false,
      winDeclared: false,
      cacheDom: function () {
        this.gridContainer = document.getElementById('grid')
        console.log(this.gridContainer)
        
      },
      bindEvents: function(){
       this.gridContainer.addEventListener('click', (e)=>{
        this.play(e)
       })
      },
      init: function(){
        this.cacheDom();
        this.bindEvents();
      },
      setPlayers: function () {
        let player1 = playerModule.createPlayer('josh')
        let player2 = playerModule.createPlayer('123')
        this.players.push(player1,player2)
      },
      play: function (event) {
        console.log(event)
          let player = this.moveOrder == false ? this.players[0] : this.players[1];
        
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
      checkDraw: function () {
        for (let i = 1; i <= 9; i++) {
          const element = board[i];
          if (element == 'X' || element == 'O') {
            return false;
          }
        }
        return true;
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
  
    gameModule.init()
    
  
  })()