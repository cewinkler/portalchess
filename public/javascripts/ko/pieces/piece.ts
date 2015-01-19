interface IChessPiece {
    canMove(fromLocation: BoardLocation, toLocation: BoardLocation): boolean;

}

class ChessPiece implements IChessPiece {
    canMove(fromLocation: BoardLocation, toLocation: BoardLocation) {
        return false;
    }
}

class Pawn implements IChessPiece {
    canMove(fromLocation: BoardLocation, toLocation: BoardLocation) {
        return false;
    }
}
 