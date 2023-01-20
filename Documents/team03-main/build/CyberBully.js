import CanvasUtil from './CanvasUtil.js';
import { Game } from './GameLoop.js';
import HomeScreen from './HomeScreen.js';
import KeyListener from './KeyListener.js';
import StartMenu from './StartMenu.js';
import structure from './structure.js';
import TiktokComments from './TiktokComments.js';
import TikTokPost from './TiktokPost.js';
import YoutubeCommentss from './YoutubeCommentss.js';
import YoutubePost from './YoutubePost.js';
export default class CyberBully extends Game {
    canvas;
    keyListener;
    scenes = [];
    choiceData = [];
    currentScene;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = 720;
        this.keyListener = new KeyListener();
        structure.forEach(scene => { this.scenes.push(new SceneInfo(scene.app, JSON.stringify(scene.data))); });
        this.scenes.reverse();
        this.currentScene = new StartMenu(this.canvas.width, this.canvas.height);
    }
    processInput() {
        this.currentScene.processInput(this.keyListener);
    }
    update(elapsed) {
        const sceneOut = this.currentScene.update(elapsed);
        if (sceneOut > 0) {
            this.choiceData.push(sceneOut);
            const nextScene = this.scenes.pop();
            if (nextScene.app === "homescreen")
                this.currentScene = new HomeScreen(this.canvas.width, this.canvas.height, nextScene.data);
            if (nextScene.app === "ttpost")
                this.currentScene = new TikTokPost(this.canvas.width, this.canvas.height, nextScene.data);
            if (nextScene.app === "ttcomments")
                this.currentScene = new TiktokComments(this.canvas.width, this.canvas.height, nextScene.data);
            if (nextScene.app === "youtubepost")
                this.currentScene = new YoutubePost(this.canvas.width, this.canvas.height, nextScene.data);
            if (nextScene.app === "youtubecomments")
                this.currentScene = new YoutubeCommentss(this.canvas.width, this.canvas.height, nextScene.data);
        }
        return true;
    }
    render() {
        CanvasUtil.clearCanvas(this.canvas);
        this.currentScene.render(this.canvas);
    }
}
class SceneInfo {
    app;
    data;
    constructor(app, data) {
        this.app = app;
        this.data = data;
    }
}
//# sourceMappingURL=CyberBully.js.map