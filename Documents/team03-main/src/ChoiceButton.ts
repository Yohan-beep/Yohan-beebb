import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';

export default class ChoiceButton extends Button {
  private hoverImage: HTMLImageElement;

  private choiceIndex: number;

  private hoveredOn: boolean;

  private content: string[] = [];

  public constructor(x: number, y: number, idx: number, imgsrc: string, hoverimgsrc: string, content: string[]) {
    super(x, y, imgsrc);
    this.choiceIndex = idx;
    this.hoverImage = CanvasUtil.loadNewImage(hoverimgsrc);
    this.content = content;
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
    for (let i = 0; i < this.content.length; i++) {
      CanvasUtil.writeTextToCanvas(
        canvas,
        this.content[i],
        this.posX + 20,
        this.posY + 40 + i * 22,
        'left',
        'bold Helvetica',
        20,
        'black',
      );
    }
  }
}