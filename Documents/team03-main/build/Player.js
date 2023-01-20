import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Player extends Drawable {
    maxX;
    maxY;
    constructor(maxX, maxY) {
        super();
        this.maxX = maxX;
        this.maxY = maxY;
        this.image = CanvasUtil.loadNewImage('assets/cat-player.png');
        this.posX = maxX * 0.5;
        this.posY = maxY * 0.5;
    }
    moveRight() {
        this.posX = Math.min(this.posX + 5, this.maxX - this.image.width);
    }
    moveLeft() {
        this.posX = Math.max(this.posX - 5, 0);
    }
    moveDown() {
        this.posY = Math.min(this.posY + 5, this.maxY - this.image.height);
    }
    moveUp() {
        this.posY = Math.max(this.posY - 5, 0);
    }
    isOnButton(button) {
        return (this.posX + this.image.width * 0.5 > button.getPosX()
            && this.posX + this.image.width * 0.5 < button.getPosX() + button.getWidth()
            && this.posY + this.image.height * 0.5 > button.getPosY()
            && this.posY + this.image.height * 0.5 < button.getPosY() + button.getHeight());
    }
}
//# sourceMappingURL=Player.js.map