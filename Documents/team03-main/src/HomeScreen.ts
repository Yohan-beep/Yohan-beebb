import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
import GameScene from './GameScene.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';

export default class HomeScreen extends GameScene {
  private appIcons: Button[] = [];

  private toTT: boolean;

  private timeToNotification: number;

  private notification: string;

  private nextapp: number;

  public constructor(maxX: number, maxY: number, data: string) {
    super(maxX, maxY, 'assets/blue-bg.png');
    this.playerCharacter = new Player(this.maxX, this.maxY);
    this.appIcons.push(new Button(85, 120, 'assets/tiktok-icon.png'));
    this.appIcons.push(new Button(415, 120, 'assets/whatsapp-icon.png'));
    this.appIcons.push(new Button(85, 420, 'assets/youtube-icon.png'));
    this.appIcons.push(new Button(415, 420, 'assets/snapchat-icon.png'));
    this.toTT = false;
    this.timeToNotification = 2000;
    const sceneData = JSON.parse(data);
    this.nextapp = ['tiktok', 'whatsapp', 'youtube', 'snapchat'].indexOf(sceneData.nextApp);
    this.notification = sceneData.notificationText;
  }

  /**
   * Player movement and icon click
   * 
   * @param keyListener keyListener
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown('ArrowRight')) this.playerCharacter.moveRight();
    if (keyListener.isKeyDown('ArrowLeft')) this.playerCharacter.moveLeft();
    if (keyListener.isKeyDown('ArrowDown')) this.playerCharacter.moveDown();
    if (keyListener.isKeyDown('ArrowUp')) this.playerCharacter.moveUp();
    if (keyListener.keyPressed('Space')) {
      if (this.playerCharacter.isOnButton(this.appIcons[this.nextapp])
      && this.appIcons[this.nextapp].getClickable()) this.toTT = true;
    }
  }

  /**
   * Checks if time fo notification
   * Checks if icon has been clicked
   * 
   * @param elapsed time
   * @returns number to encode ending
   */
  public update(elapsed: number): number{
    if (this.timeToNotification > 0) {
      this.timeToNotification -= elapsed;
      if (this.timeToNotification < 0) {
        this.appIcons[this.nextapp].changeClickable();
      }
    }
    if (this.toTT) return 1;
    return 0;
  }

  /**
   * Renders elements to canvas
   * 
   * @param canvas canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.bgImage, 0, 0);
    this.appIcons.forEach((icon: Button) => icon.render(canvas));
    if (this.timeToNotification < 0) {
      CanvasUtil.fillRectangle(canvas, this.maxX * 0.05, 0, this.maxX * 0.9, 50, 'white');
      CanvasUtil.writeTextToCanvas(
        canvas,
        this.notification,
        this.maxX * 0.07,
        40,
        'left',
        'Arial',
        35,
        'black',
      );
    }
    this.playerCharacter.render(canvas)
  }
}
