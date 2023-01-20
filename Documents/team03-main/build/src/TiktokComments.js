import CanvasUtil from './CanvasUtil.js';
import GameScene from './GameScene.js';
import Player from './Player.js';
import data from '../structure.json';
export default class TiktokComments extends GameScene {
    structure;
    constructor(maxX, maxY) {
        super(maxX, maxY, './assets/white-bg.png');
        this.playerCharacter = new Player(maxX, maxY);
        const scenario = data;
        console.log(scenario);
    }
    processInput(keyListener, mouseListener) {
    }
    update(elapsed) {
        return this;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.bgImage, 0, 0);
    }
}
//# sourceMappingURL=TiktokComments.js.map