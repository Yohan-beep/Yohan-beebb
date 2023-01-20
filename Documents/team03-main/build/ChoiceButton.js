import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
export default class ChoiceButton extends Button {
    hoverImage;
    choiceIndex;
    hoveredOn;
    content = [];
    constructor(x, y, idx, imgsrc, hoverimgsrc, content) {
        super(x, y, imgsrc);
        this.choiceIndex = idx;
        this.hoverImage = CanvasUtil.loadNewImage(hoverimgsrc);
        this.content = content;
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
        for (let i = 0; i < this.content.length; i++) {
            CanvasUtil.writeTextToCanvas(canvas, this.content[i], this.posX + 20, this.posY + 40 + i * 22, 'left', 'bold Helvetica', 20, 'black');
        }
    }
}
//# sourceMappingURL=ChoiceButton.js.map