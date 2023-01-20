import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class Button extends Drawable {
  protected clickable: boolean;

  constructor(x: number, y: number, imgsrc: string) {
    super();
    this.posX = x;
    this.posY = y;
    this.image = CanvasUtil.loadNewImage(imgsrc);
    this.clickable = false;
  }

  /**
   * Changes clickable state
   */
  public changeClickable(): void {
    this.clickable = !this.clickable;
  }

  public getClickable(): boolean {
    return this.clickable;
  }

  /**
   * Renders button and notification indicator
   * 
   * @param canvas canvas
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    if (this.clickable) {
      CanvasUtil.fillCircle(canvas, this.posX + this.getWidth(), this.posY, 15, 'white');
      CanvasUtil.drawCircle(canvas, this.posX + this.getWidth(), this.posY, 15, 'red');
    }
  }
}
