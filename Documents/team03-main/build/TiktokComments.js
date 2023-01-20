import CanvasUtil from './CanvasUtil.js';
import GameScene from './GameScene.js';
import HoverButton from './HoverButton.js';
import Player from './Player.js';
import TiktokComment from './TiktokComment.js';
import ToggleButton from './ToggleButton.js';
export default class TiktokComments extends GameScene {
    comments = [];
    choices = [];
    choiceButtons = [];
    reportSelection = [];
    selectedComments = [];
    reported;
    choiceMade;
    constructor(maxX, maxY, data) {
        super(maxX, maxY, './assets/white-bg.png');
        this.playerCharacter = new Player(maxX, maxY);
        const sceneData = JSON.parse(data);
        console.log(sceneData.comments[0].author);
        for (let i = 0; i < sceneData.comments.length; i++) {
            this.comments.push(new TiktokComment(sceneData.comments[i].author, sceneData.comments[i].content, sceneData.comments[i].img, sceneData.comments[i].likes));
            this.reportSelection.push(new ToggleButton(maxX - 90, 65 + i * 70, './assets/ttc-select-green.png', './assets/ttc-select-green-x.png'));
            this.selectedComments.push(0);
        }
        this.reported = false;
        sceneData.choices.forEach((choice) => this.choices.push(choice));
        this.choiceButtons.push(new HoverButton(8, maxY - 185, 0, './assets/azure-choice-button.png', './assets/green-choice-button.png'));
        this.choiceButtons.push(new HoverButton(362, maxY - 185, 1, './assets/azure-choice-button.png', './assets/green-choice-button.png'));
        this.choiceButtons.push(new HoverButton(8, maxY - 90, 2, './assets/azure-choice-button.png', './assets/green-choice-button.png'));
        this.choiceButtons.push(new HoverButton(362, maxY - 90, 3, './assets/azure-choice-button.png', './assets/green-choice-button.png'));
        this.choiceMade = 0;
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
            if (this.playerCharacter.isOnButton(this.choiceButtons[0]))
                this.choiceMade = 1;
            if (this.playerCharacter.isOnButton(this.choiceButtons[1]))
                this.choiceMade = 2;
            if (this.playerCharacter.isOnButton(this.choiceButtons[2]))
                this.choiceMade = 3;
            if (this.playerCharacter.isOnButton(this.choiceButtons[3])) {
                if (this.selectedComments.reduce((cur, prev) => cur + prev) > 0)
                    this.reported = true;
            }
            if (!this.reported) {
                this.reportSelection.forEach((button) => {
                    if (this.playerCharacter.isOnButton(button)) {
                        button.swapImage();
                        this.selectedComments[this.reportSelection.indexOf(button)] = 1 - this.selectedComments[this.reportSelection.indexOf(button)];
                    }
                });
            }
        }
    }
    update(elapsed) {
        this.choiceButtons.forEach(button => {
            if (this.playerCharacter.isOnButton(button))
                button.changeHoveredOn(true);
            else
                button.changeHoveredOn(false);
        });
        if (this.choiceMade > 0)
            return this.choiceMade;
        return 0;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.bgImage, 0, 0);
        CanvasUtil.writeTextToCanvas(canvas, 'Comments', 200, 40, 'center', 'bold Arial', 40, 'black');
        for (let i = 0; i < this.comments.length; i++) {
            CanvasUtil.fillRectangle(canvas, 0, 60 + i * 70, canvas.width, 1, '#c4bdbc');
            this.comments[i].render(canvas, 10, 65 + i * 70);
            CanvasUtil.writeTextToCanvas(canvas, this.comments[i].getAuthor(), 100, 90 + i * 70, 'left', 'bold Arial', 25, 'purple');
            CanvasUtil.writeTextToCanvas(canvas, this.comments[i].getContent(), 100, 120 + i * 70, 'left', 'Arial', 20, 'blue');
        }
        this.reportSelection.forEach((button) => button.render(canvas));
        this.choiceButtons.forEach(button => {
            button.render(canvas);
            CanvasUtil.writeTextToCanvas(canvas, this.choices[button.getChoiceIndex()], button.getPosX() + 20, button.getPosY() + 40, 'left', 'bold Helvetica', 20, 'black');
        });
        this.playerCharacter.render(canvas);
    }
    ;
}
;
//# sourceMappingURL=TiktokComments.js.map