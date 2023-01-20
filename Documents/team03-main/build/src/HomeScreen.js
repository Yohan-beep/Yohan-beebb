import Button from './Button.js';
import CanvasUtil from './CanvasUtil.js';
import GameScene from './GameScene.js';
import Player from './Player.js';
import TikTokPost from './TiktokPost.js';
export default class HomeScreen extends GameScene {
    tiktok;
    whatsapp;
    youtube;
    snapchat;
    toTT;
    constructor(maxX, maxY) {
        super(maxX, maxY, 'assets/blue-bg.png');
        this.playerCharacter = new Player(this.maxX, this.maxY);
        this.tiktok = new Button(85, 120, 'assets/tiktok-icon.png');
        this.whatsapp = new Button(415, 120, 'assets/whatsapp-icon.png');
        this.youtube = new Button(85, 420, 'assets/youtube-icon.png');
        this.snapchat = new Button(415, 420, 'assets/snapchat-icon.png');
        this.toTT = false;
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
            if (this.playerCharacter.isOnButton(this.tiktok))
                this.toTT = true;
        }
    }
    update(elapsed) {
        if (!this.toTT)
            return this;
        return new TikTokPost(this.maxX, this.maxY);
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.bgImage, 0, 0);
        this.tiktok.render(canvas);
        this.whatsapp.render(canvas);
        this.youtube.render(canvas);
        this.snapchat.render(canvas);
        this.playerCharacter.render(canvas);
    }
}
//# sourceMappingURL=HomeScreen.js.map