import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class Ending extends Scene {
  public constructor(maxX: number, maxY: number, bgsrc: string, data: object) {
    super(maxX, maxY, bgsrc);
  }

  public processInput(keyListener: KeyListener): void {
    
  }

  public update(elapsed: number): number {
    return 0
  }

  public render(canvas: HTMLCanvasElement): void {
    
  }
}