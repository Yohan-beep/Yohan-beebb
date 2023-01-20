import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
import GameScene from './GameScene.js';
import ToggleButton from './ToggleButton.js';
import Player from './Player.js';
export default class TikTokPost extends GameScene {
    sprite;
    frameCount;
    frame;
    timeToNextFrame;
    pause;
    likeButton;
    liked;
    commentsButton;
    openComments;
    playButton;
    constructor(maxX, maxY, data) {
        super(maxX, maxY, './assets/blue-bg.png');
        const sceneData = JSON.parse(data);
        this.sprite = CanvasUtil.loadNewImage(sceneData.spritesheet);
        this.frameCount = sceneData.frameCount;
        this.frame = 0;
        this.timeToNextFrame = 50;
        this.playerCharacter = new Player(this.maxX, this.maxY);
        this.pause = true;
        this.likeButton = new ToggleButton(550, 500, './assets/tt-like-icon.png', './assets/tt-liked-icon.png');
        this.liked = false;
        this.commentsButton = new Button(550, 725, './assets/tt-comment-icon.png');
        this.openComments = false;
        this.playButton = CanvasUtil.loadNewImage('./assets/play-button.png');
    }
    processInput(keyListener) {
        if (keyListener.isKeyDown('ArrowRight'))
            this.playerCharacter.moveRight();
        if (keyListener.isKeyDown('ArrowLeft'))
            this.playerCharacter.moveLeft();
        if (keyListener.isKeyDown('ArrowDown'))
            this.playerCharacter.moveDown();
        if (keyListener.isKeyDown('ArrowUp'))
            this.playerCharacter.moveUp();
        if (keyListener.keyPressed('Space')) {
            if (this.playerCharacter.isOnButton(this.likeButton)) {
                this.likeButton.swapImage();
                this.liked = !this.liked;
            }
            else if (this.playerCharacter.isOnButton(this.commentsButton))
                this.openComments = true;
            else
                this.pause = !this.pause;
        }
    }
    update(elapsed) {
        if (!this.pause) {
            this.timeToNextFrame -= elapsed;
            if (this.timeToNextFrame < 0) {
                this.frame = (this.frame + 1) % 20;
                this.timeToNextFrame = 50;
            }
        }
        if (this.openComments) {
            if (this.liked)
                return 2;
            return 1;
        }
        ;
        return 0;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.bgImage, 0, 0);
        CanvasUtil.drawFrame(canvas, this.sprite, this.frameCount, this.frame, 0, 0, canvas.width, canvas.height);
        this.likeButton.render(canvas);
        this.commentsButton.render(canvas);
        if (this.pause) {
            CanvasUtil.drawImage(canvas, this.playButton, 0.5 * (canvas.width - this.playButton.width), 0.5 * (canvas.height - this.playButton.height));
        }
        this.playerCharacter.render(canvas);
    }
}
//# sourceMappingURL=TiktokPost.js.map