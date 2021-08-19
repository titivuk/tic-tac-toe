import Player from "./player";
import Point from "./point";

class Move {
  public readonly createdAt: Date;

  constructor(public readonly point: Point, public readonly player: Player) {
    this.createdAt = new Date();
  }
}

export default class MoveHistory {
  private readonly _moves: Move[] = [];

  public createMove(point: Point, player: Player) {
    this._moves.push(new Move(point, player));
  }
}
