
enum Player { White, Black };
class ChessBoard {
     whiteId: string;
     blackId: string;
     moveList: ChessMove[];
 }

 class BoardLocation {
     position: BoardPosition;
     piece: IChessPiece;
     private owner: Player;

     forwardSquare(amount = 1) {
         return this.position.file + amount;
     }

     backSquare(amount = 1) {
         return this.position.file - amount;
     }
}

 class BoardPosition {
     file: number;
     rank: number;
 }

class ChessMove {
    fromPosition: BoardLocation;
    toPosition: BoardLocation;
}

 