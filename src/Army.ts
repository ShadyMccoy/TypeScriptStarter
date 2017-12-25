import { Agent } from "./Agents";
import { GamePos, Tile } from "./Tile";

export class Army extends Agent {
  private strength: number;
  private player: string;
  private pos: GamePos;

  constructor(pos: GamePos, strength: number, player: string) {
    super();
    this.pos = pos;
    this.strength = strength;
    this.player = player;
  }

  public attack(tile: Tile, power: number) {
    if (power > this.strength) {
      power = this.strength;
    }

    this.strength -= power;
    tile.registerArmy(new Army(tile.pos, power, this.player));
  }

  public draw(
    x: number,
    y: number,
    width: number,
    height: number,
    ctx: CanvasRenderingContext2D
  ) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(width * (x + 0.5), height * (y + 0.5), width / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}
