import CanvasUtil from './CanvasUtil.js';
import { Game } from './GameLoop.js';
import KeyListener from './KeyListener.js';
import MouseListener from './MouseListener.js';
import StartMenu from './StartMenu.js';
export default class CyberBully extends Game {
    canvas;
    keyListener;
    mouseListener;
    currentScene;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = 720;
        this.keyListener = new KeyListener();
        this.mouseListener = new MouseListener(this.canvas);
        this.currentScene = new StartMenu(this.canvas.width, this.canvas.height);
    }
    processInput() {
        this.currentScene.processInput(this.keyListener, this.mouseListener);
    }
    update(elapsed) {
        this.currentScene = this.currentScene.update(elapsed);
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas);
    }
}
//# sourceMappingURL=CyberBully.js.map