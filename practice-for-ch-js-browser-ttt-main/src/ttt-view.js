class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;

    this.setupBoard();
    this.handleClick();
  }
  
  setupBoard() {
    const ul = document.createElement('ul');

    for (let row= 0; row < 3; row++){
      for (let col = 0; col < 3; col++){
        const cell = document.createElement('li');
        cell.dataset.row = row;
        cell.dataset.col = col;

        ul.appendChild(cell);
      }
    }

    this.el.appendChild(ul);
  } 
  
  handleClick(board) {
    const e = board.target;
    "LI" === e.nodeNamr && this.makeMove(e);
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;
