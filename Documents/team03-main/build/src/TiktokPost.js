import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
import GameScene from './GameScene.js';
import Player from './Player.js';
import TiktokComments from './TiktokComments.js';
export default class TikTokPost extends GameScene {
    sprite;
    frame;
    timeToNextFrame;
    pause;
    likeButton;
    commentsButton;
    openComments;
    constructor(maxX, maxY) {
        super(maxX, maxY, './assets/blue-bg.png');
        this.sprite = CanvasUtil.loadNewImage('./assets/santa.png');
        this.frame = 0;
        this.timeToNextFrame = 50;
        this.playerCharacter = new Player(this.maxX, this.maxY);
        this.pause = true;
        this.likeButton = new Button(550, 500, './assets/tt-like-icon.png');
        this.commentsButton = new Button(550, 725, './assets/tt-comment-icon.png');
        this.openComments = false;
        console.log(maxY);
    }
    processInput(keyListener, mouseListener) {
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
                this.likeButton = new Button(550, 500, './assets/tt-liked-icon.png');
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
        if (this.openComments)
            return new TiktokComments(this.maxX, this.maxY);
        return this;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.bgImage, 0, 0);
        CanvasUtil.drawFrame(canvas, this.sprite, 20, this.frame, 0, 0, canvas.width, canvas.height);
        this.likeButton.render(canvas);
        this.commentsButton.render(canvas);
        this.playerCharacter.render(canvas);
    }
}
//# sourceMappingURL=TiktokPost.js.map