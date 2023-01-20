import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class Player extends Drawable {
  private maxX: number;

  private maxY: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.maxX = maxX;
    this.maxY = maxY;
    this.image = CanvasUtil.loadNewImage('assets/cat-player.png');
    this.posX = maxX * 0.5;
    this.posY = maxY * 0.5;
  }

  public moveRight(): void {
    this.posX = Math.min(this.posX + 5, this.maxX - this.image.width);
  }

  public moveLeft(): void {
    this.posX = Math.max(this.posX - 5, 0);
  }

  public moveDown(): void {
    this.posY = Math.min(this.posY + 5, this.maxY - this.image.height);
  }

  public moveUp(): void {
    this.posY = Math.max(this.posY - 5, 0);
  }

  /**
   * Checks if player is currently o button
   * 
   * @param button 
   * @returns 
   */
  public isOnButton(button: Button): boolean {
    return (this.posX + this.image.width * 0.5 > button.getPosX()
      && this.posX + this.image.width * 0.5 < button.getPosX() + button.getWidth()
      && this.posY + this.image.height * 0.5 > button.getPosY()
      && this.posY + this.image.height * 0.5 < button.getPosY() + button.getHeight());
  }
}
