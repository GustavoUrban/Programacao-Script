/* Estilos para o tabuleiro de damas */
enum Piece {
    Empty = "",
    BlackPawn = "♟",
    WhitePawn = "♙",
    
}

class Board {
    private squares: Piece[][] = [];

    constructor() {
        // Inicialize o tabuleiro com peças
        for (let row = 0; row < 8; row++) {
            this.squares[row] = [];
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 === 0) {
                    this.squares[row][col] = Piece.Empty;
                } else if (row < 3) {
                    this.squares[row][col] = Piece.BlackPawn;
                } else if (row > 4) {
                    this.squares[row][col] = Piece.WhitePawn;
                } else {
                    this.squares[row][col] = Piece.Empty;
                }
            }
        }
    }

    public getPiece(row: number, col: number): Piece {
        return this.squares[row][col];
    }
}

const board = new Board();
const boardElement = document.getElementById("board")!;

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        square.className = `square ${((row + col) % 2 === 0) ? "white" : "black"}`;
        square.textContent = board.getPiece(row, col);
        boardElement.appendChild(square);
    }
}
