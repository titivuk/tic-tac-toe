import { GameStatus } from "../src/enum";
import Game from "../src/game";

describe("Game", () => {
  let game: Game = new Game();

  beforeEach(() => {
    game = new Game();
  });

  test("should start game", () => {
    game.start();
    expect(game.status).toEqual(GameStatus.IN_PROGRESS);
  });

  test("should return winner = null :: game is not finished", () => {
    game.start();
    expect(game.winner).toEqual(null);
  });

  test("should finish game with X player winner :: row complete", () => {
    game.start();
    game.makeMove(2, 0);
    game.makeMove(0, 0);
    game.makeMove(2, 1);
    game.makeMove(0, 1);
    game.makeMove(2, 2);

    expect(game.status).toEqual(GameStatus.FINISHED);
    expect(game.winner).toEqual(game.playerX);
  });

  test("should finish game with X player winner :: column complete", () => {
    game.start();
    game.makeMove(2, 0);
    game.makeMove(0, 0);
    game.makeMove(2, 1);
    game.makeMove(0, 1);
    game.makeMove(2, 2);

    expect(game.status).toEqual(GameStatus.FINISHED);
    expect(game.winner).toEqual(game.playerX);
  });

  test("should finish game with X player winner :: diagonal complete", () => {
    game.start();
    game.makeMove(0, 0);
    game.makeMove(0, 2);
    game.makeMove(1, 1);
    game.makeMove(2, 0);
    game.makeMove(2, 2);

    expect(game.status).toEqual(GameStatus.FINISHED);
    expect(game.winner).toEqual(game.playerX);
  });

  test("should finish game with O player winner :: diagonal complete", () => {
    game.start();
    game.makeMove(0, 1);
    game.makeMove(0, 2);
    game.makeMove(2, 2);
    game.makeMove(1, 1);
    game.makeMove(2, 1);
    game.makeMove(2, 0);

    expect(game.status).toEqual(GameStatus.FINISHED);
    expect(game.winner).toEqual(game.playerO);
  });
});
