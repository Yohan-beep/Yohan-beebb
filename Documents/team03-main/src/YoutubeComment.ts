import CanvasUtil from './CanvasUtil.js';

export default class YoutubeComment {
   private author: string;

   private content: string;

   private profilePic: HTMLImageElement;

   private likes: number;

   public constructor(author: string, content: string, imgsrc: string, likes: number) {
      this.author = author;
      this.content = content;
      this.profilePic = CanvasUtil.loadNewImage(imgsrc);
      this.likes = likes;
   }

   public getAuthor(): string {
      return this.author;
   }
  
   public getContent(): string {
      return this.content;
   }
  
   public getLikes(): number {
      return this.likes;
   }

   /**
   * Renders avatar to canvas
   * 
   * @param canvas 
   * @param posX 
   * @param posY 
   */
  public render(canvas: HTMLCanvasElement, posX: number, posY: number): void {
   CanvasUtil.drawImage(canvas, this.profilePic, posX, posY);
 };
};