(function () {
    var  gameModule = {
      moveOrder: false,
      cacheDom: function () {
        this.startMenu = document.querySelector('.start')
        this.gridContainer = document.querySelector('.container-grid')
        this.grid = document.getElementById('grid')
        this.btnReset = document.getElementById('reset')
        this.squares = document.querySelectorAll('.square')
      },
      bindEvents: function(){
       this.grid.addEventListener('click', (e)=>{
        this.play(e)
       })
       this.btnReset.addEventListener('click', (e)=> {
        this.reset()
       })
      },
      init: function(){
        this.cacheDom();
        this.bindEvents();
      },
      setPlayers: function (pl1,pl2) {
        let player1 = playerModule.createPlayer(pl1)
        let player2 = playerModule.createPlayer(pl2)
        this.players = [player1,player2]
      },
      play: function (event) {
        console.log(boardModule.board)
          let id = this.extractSquareNum(event);
          let player = this.moveOrder == false ? this.players[0] : this.players[1];
          let marker = this.marker();
         const moveValid = player.makeMove(id,marker);
         if (moveValid != false) {
            this.changeMove()
            if (boardModule.checkWin(marker)) {
              this.declareWin()
            } else if (boardModule.checkDraw() == true) {
              prompt('Draw')
            }
         }
         
      },
      extractSquareNum: function (event) {
        return event.target.id.split('').splice(event.target.id.length-1)[0]*1;
      },
      marker: function () {
       return this.moveOrder == false ? 'X' : 'O';
      },
      changeMove: function () {
        this.moveOrder = this.moveOrder == false;
      },
      declareWin: function () {
        const name  = this.moveOrder == false ? this.players[0].name : this.players[1].name
        prompt(`${name} have won!`)
      },
      reset: function () {
        for (let square of this.squares) {
          square.innerHTML = ''
        }
        this.moveOrder = false;
      }
      
    };
    let boardModule = {
      board: {
       1:'',2:'',3:'',
       4:'',5:'',6:'',
       7:'',8:'',9:''
      },
      checkDraw: function () {
        for (let i = 1; i < 9; i++) {
          let element = this.board[i];
          if (element != 'X' && element != 'O') {
            return false;
          }
        }
        return true;
      },
      checkWin: function (marker) {
        const combinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
        let board = this.board
        for (const i in combinations) {
          const combo = combinations[i]
          const first = combo[0];
          const second = combo[1];
          const third = combo[2];
          if ((board[first] == marker) && (board[second] == marker ) && (board[third] == marker)) {
            console.log('win')
            return true;
          }
        }
        return false;
      },
     checkMove: function(num, marker){
      if (this.board[num] == ''){
        this.markCell(num,marker)
      }
      else {
        prompt('Invalid move!')
        return false;
      }
     },
     markCell: function (num,marker) {
       this.board[num] = marker;
       let square = document.getElementById(`square-${num}`)
       square.innerHTML = marker;
     },
    }
  
    let playerModule = {
       createPlayer: function(name){
        const makeMove = (num,marker) => boardModule.checkMove(num,marker);
        return {name, makeMove}
      }
    }

    const startBtn = document.getElementById('startBtn')

    startBtn.addEventListener('click', () =>{
      const names = document.querySelectorAll('input')
      console.log('123')
      gameModule.setPlayers(names[0].value, names[1].value)
      gameModule.init()
      gameModule.gridContainer.classList.remove('unvisible')
      console.log(gameModule.startMenu)
      gameModule.startMenu.classList.add('unvisible')
    })
    
  
  })()