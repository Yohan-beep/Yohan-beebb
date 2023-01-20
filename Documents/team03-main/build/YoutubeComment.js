import CanvasUtil from './CanvasUtil.js';
export default class YoutubeComment {
    author;
    content;
    profilePic;
    likes;
    constructor(author, content, imgsrc, likes) {
        this.author = author;
        this.content = content;
        this.profilePic = CanvasUtil.loadNewImage(imgsrc);
        this.likes = likes;
    }
    getAuthor() {
        return this.author;
    }
    getContent() {
        return this.content;
    }
    getLikes() {
        return this.likes;
    }
    render(canvas, posX, posY) {
        CanvasUtil.drawImage(canvas, this.profilePic, posX, posY);
    }
    ;
}
;
//# sourceMappingURL=YoutubeComment.js.map