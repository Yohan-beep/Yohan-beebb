import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
export default class Button extends Drawable {
    clickable;
    constructor(x, y, imgsrc) {
        super();
        this.posX = x;
        this.posY = y;
        this.image = CanvasUtil.loadNewImage(imgsrc);
        this.clickable = false;
    }
    changeClickable() {
        this.clickable = !this.clickable;
    }
    getClickable() {
        return this.clickable;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
        if (this.clickable) {
            CanvasUtil.fillCircle(canvas, this.posX + this.getWidth(), this.posY, 15, 'white');
            CanvasUtil.drawCircle(canvas, this.posX + this.getWidth(), this.posY, 15, 'red');
        }
    }
}
//# sourceMappingURL=Button.js.map