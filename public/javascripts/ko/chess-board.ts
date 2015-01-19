enum Player { White, Black };
class ChessBoard {
     whiteId: string;
     blackId: string;
     moveList: ChessMove[];
 }

 class ChessPosition {
     file: number;
     rank: number;
     piece: IChessPiece;
     private owner: Player;
 }

class ChessMove {
    fromPosition: ChessPosition;
    toPosition: ChessPosition;
}

 interface IChessPiece {
     
 }