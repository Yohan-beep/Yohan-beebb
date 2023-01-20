import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
export default class HoverButton extends Button {
    hoverImage;
    choiceIndex;
    hoveredOn;
    constructor(x, y, idx, imgsrc, hoverimgsrc) {
        super(x, y, imgsrc);
        this.choiceIndex = idx;
        this.hoverImage = CanvasUtil.loadNewImage(hoverimgsrc);
    }
    changeHoveredOn(hover) {
        this.hoveredOn = hover;
    }
    getChoiceIndex() {
        return this.choiceIndex;
    }
    render(canvas) {
        if (this.hoveredOn)
            CanvasUtil.drawImage(canvas, this.hoverImage, this.posX, this.posY);
        else
            CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=HoverButton.js.map