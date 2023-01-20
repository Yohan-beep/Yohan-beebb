import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
export default class ToggleButton extends Button {
    altImage;
    constructor(x, y, imgsrc, altimgsrc) {
        super(x, y, imgsrc);
        this.altImage = CanvasUtil.loadNewImage(altimgsrc);
    }
    swapImage() {
        const tempimg = this.image;
        this.image = this.altImage;
        this.altImage = tempimg;
    }
}
//# sourceMappingURL=ToggleButton.js.map