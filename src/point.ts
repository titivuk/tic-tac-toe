import { Mark } from "./enum";

export default class Point {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly mark: Mark | null = null
  ) {}
}
