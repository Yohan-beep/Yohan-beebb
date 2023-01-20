import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
import HomeScreen from './HomeScreen.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class StartMenu extends Scene {
  private homeSgo: boolean;

  private startButton: Button;

  private settingsButton: Button;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY, 'assets/blue-bg.png');
    this.homeSgo = false;
  }

  /**
   * Changes start
   * 
   * @param keyListener 
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('Space')) this.homeSgo = true;
  }

  /**
   * Checks if ready to start
   * 
   * @param elapsed time
   * @returns 
   */
  public update(elapsed: number): number {
    if (this.homeSgo) return 1;
    return 0
  }

  /**
   * Renders bg and Start
   * 
   * @param canvas canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.bgImage, 0, 0);
    CanvasUtil.writeTextToCanvas(canvas, 'Space to start', this.maxX * 0.5, this.maxY * 0.5, 'center', 'Arial', 100, 'white');
  }
}