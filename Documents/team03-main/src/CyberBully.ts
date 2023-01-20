import CanvasUtil from './CanvasUtil.js';
import { Game } from './GameLoop.js';
import HomeScreen from './HomeScreen.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import StartMenu from './StartMenu.js';
import structure from './structure.js';
import TiktokComments from './TiktokComments.js';
import TikTokPost from './TiktokPost.js';
import YoutubeCommentss from './YoutubeCommentss.js';
import YoutubePost from './YoutubePost.js';

export default class CyberBully extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private scenes: SceneInfo[] = [];

  private choiceData: number[] = [];

  private currentScene: Scene;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = 720;
    this.keyListener = new KeyListener();
    structure.forEach(scene => {this.scenes.push(new SceneInfo(scene.app, JSON.stringify(scene.data)))});
    this.scenes.reverse();
    this.currentScene = new StartMenu(this.canvas.width, this.canvas.height);
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    this.currentScene.processInput(this.keyListener);
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    const sceneOut = this.currentScene.update(elapsed);
    if (sceneOut > 0) {
      this.choiceData.push(sceneOut);
      const nextScene = this.scenes.pop();
      if (nextScene.app === "homescreen") this.currentScene = new HomeScreen(this.canvas.width, this.canvas.height, nextScene.data);
      if (nextScene.app === "ttpost") this.currentScene = new TikTokPost(this.canvas.width, this.canvas.height, nextScene.data);
      if (nextScene.app === "ttcomments") this.currentScene = new TiktokComments(this.canvas.width, this.canvas.height, nextScene.data);
      if (nextScene.app === "youtubepost") this.currentScene = new YoutubePost (this.canvas.width, this.canvas.height, nextScene.data);
      if (nextScene.app === "youtubecomments") this.currentScene = new YoutubeCommentss(this.canvas.width, this.canvas.height, nextScene.data);
    }
    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasUtil.clearCanvas(this.canvas);
    this.currentScene.render(this.canvas);
  }
}

class SceneInfo {
  public app: string;

  public data: string;

  public constructor(app: string, data: string) {
    this.app = app;
    this.data = data;
  }
}