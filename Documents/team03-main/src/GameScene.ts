import Clock from './Clock.js';
import Player from './Player.js';
import Scene from './Scene.js';
export default abstract class GameScene extends Scene {
  protected playerCharacter: Player;

  protected clock: Clock;
}