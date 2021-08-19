import { GameStatus, Mark } from "./enum";
import Board from "./board";
import Player from "./player";
import Point from "./point";
import MoveHistory from "./move-history";

export default class Game {
  public readonly board = new Board();
  public readonly moveHistory: MoveHistory = new MoveHistory();
  public readonly playerX = new Player("player X", Mark.X);
  public readonly playerO = new Player("player O", Mark.O);
  private _status: GameStatus = GameStatus.CREATED;
  private _currentPlayer: Player = this.playerX;

  get status() {
    return this._status;
  }

  get winner(): Player | null {
    return this._status === GameStatus.FINISHED ? this._currentPlayer : null;
  }

  public start() {
    this._status = GameStatus.IN_PROGRESS;
    this._currentPlayer = this.playerX;
  }

  public makeMove(x: number, y: number) {
    if (this._status === GameStatus.IN_PROGRESS) {
      const point = new Point(x, y, this._currentPlayer?.mark);
      this.board.putMark(point);
      this.moveHistory.createMove(point, this._currentPlayer);

      if (this.board.checkLineComplete()) {
        this.finish();
      } else {
        this.updateCurrentPlayer();
      }
    }
  }

  private finish() {
    this._status = GameStatus.FINISHED;
  }

  private updateCurrentPlayer() {
    this._currentPlayer =
      this._currentPlayer === this.playerX ? this.playerO : this.playerX;
  }
}
