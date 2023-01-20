import CanvasUtil from './CanvasUtil.js';
import HomeScreen from './HomeScreen.js';
import Scene from './Scene.js';
export default class StartMenu extends Scene {
    homeSgo;
    startButton;
    settingsButton;
    constructor(maxX, maxY) {
        super(maxX, maxY, 'assets/blue-bg.png');
        this.homeSgo = false;
    }
    processInput(keyListener, mouseListener) {
        if (keyListener.keyPressed('Space'))
            this.homeSgo = true;
    }
    update(elapsed) {
        if (!this.homeSgo)
            return this;
        console.log('change');
        return new HomeScreen(this.maxX, this.maxY);
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.bgImage, 0, 0);
        CanvasUtil.writeTextToCanvas(canvas, 'Space to start', this.maxX * 0.5, this.maxY * 0.5, 'center', 'Arial', 100, 'white');
    }
}
//# sourceMappingURL=StartMenu.js.map