import { Mark } from "./enum";
import Point from "./point";

export default class Board {
  private readonly board = [
    [new Point(0, 0), new Point(0, 1), new Point(0, 2)],
    [new Point(1, 0), new Point(1, 1), new Point(1, 2)],
    [new Point(2, 0), new Point(2, 1), new Point(2, 2)],
  ];

  public putMark(point: Point) {
    if (this.board[point.x][point.y].mark == null) {
      this.board[point.x][point.y] = point;
    }
  }

  public checkLineComplete() {
    return this.checkRows() || this.checkColumns() || this.checkDiagonals();
  }

  private checkRows() {
    let lineFinished = false;

    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i].every((point) => point.mark === Mark.O) ||
        this.board[i].every((point) => point.mark === Mark.X)
      ) {
        lineFinished = true;
        break;
      }
    }

    return lineFinished;
  }

  private checkColumns() {
    let lineFinished = false;

    for (let i = 0; i < this.board.length; i++) {
      const column: Point[] = [];

      for (let j = 0; j < this.board.length; j++) {
        column.push(this.board[j][i]);
      }

      if (
        column.every((point) => point.mark === Mark.O) ||
        column.every((point) => point.mark === Mark.X)
      ) {
        lineFinished = true;
        break;
      }
    }

    return lineFinished;
  }

  private checkDiagonals() {
    let lineFinished = false;

    const diagonal1: Point[] = [];
    const diagonal2: Point[] = [];

    for (let i = 0; i < this.board.length; i++) {
      diagonal1.push(this.board[i][i]);
      diagonal2.push(this.board[i][this.board.length - 1 - i]);
    }

    if (
      diagonal1.every((point) => point.mark === Mark.O) ||
      diagonal1.every((point) => point.mark === Mark.X) ||
      diagonal2.every((point) => point.mark === Mark.O) ||
      diagonal2.every((point) => point.mark === Mark.X)
    ) {
      lineFinished = true;
    }

    return lineFinished;
  }
}
