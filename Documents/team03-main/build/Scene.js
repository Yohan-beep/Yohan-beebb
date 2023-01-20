import CanvasUtil from './CanvasUtil.js';
export default class Scene {
    maxX;
    maxY;
    bgImage;
    constructor(maxX, maxY, bgsrc) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.bgImage = CanvasUtil.loadNewImage(bgsrc);
    }
}
//# sourceMappingURL=Scene.js.map