import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';

export default class ToggleButton extends Button {
  private altImage: HTMLImageElement;

  public constructor(x: number, y: number, imgsrc: string, altimgsrc: string) {
    super(x, y, imgsrc);
    this.altImage = CanvasUtil.loadNewImage(altimgsrc);
  }

  /**
   * Swaps to alt image
   */
  public swapImage(): void {
    const tempimg = this.image;
    this.image = this.altImage;
    this.altImage = tempimg;
  }
}