import CyberBully from './CyberBully.js';
import { GameLoop } from './GameLoop.js';

const game = new CyberBully(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});