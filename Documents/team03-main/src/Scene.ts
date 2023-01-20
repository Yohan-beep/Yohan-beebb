import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  protected bgImage: HTMLImageElement;

  public constructor(maxX: number, maxY: number, bgsrc: string) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.bgImage = CanvasUtil.loadNewImage(bgsrc);
  }

  public abstract processInput(keyListener: KeyListener): void;

  public abstract update(elapsed: number): number;

  public abstract render(canvas: HTMLCanvasElement): void;
}
