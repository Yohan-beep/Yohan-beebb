import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';

export default class HoverButton extends Button {
  private hoverImage: HTMLImageElement;

  private choiceIndex: number;

  private hoveredOn: boolean;

  public constructor(x: number, y: number, idx: number, imgsrc: string, hoverimgsrc: string) {
    super(x, y, imgsrc);
    this.choiceIndex = idx;
    this.hoverImage = CanvasUtil.loadNewImage(hoverimgsrc);
  }

  /**
   * Changes hoveredon
   * 
   * @param hover bool
   */
  public changeHoveredOn(hover: boolean): void {
    this.hoveredOn = hover;
  }
  
  public getChoiceIndex(): number {
    return this.choiceIndex;
  }

  /**
   * Renders button to canvas
   * 
   * @param canvas canvas
   */
  public override render(canvas: HTMLCanvasElement): void {
    if (this.hoveredOn) CanvasUtil.drawImage(canvas, this.hoverImage, this.posX, this.posY);
    else CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}