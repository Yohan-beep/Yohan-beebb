import CyberBully from './CyberBully.js';
import { GameLoop } from './GameLoop.js';
const game = new CyberBully(document.getElementById('game'));
const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
    gameLoop.start();
});
//# sourceMappingURL=app.js.map