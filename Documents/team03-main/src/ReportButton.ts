import ChoiceButton from './ChoiceButton.js';

export default class ReportButton extends ChoiceButton {
  private reported: boolean;

  public constructor(x: number, y: number, idx: number, imgsrc: string, hoverimgsrc: string, content: string[]) {
    super(x, y, idx, imgsrc, hoverimgsrc, content);
    this.reported = false;
  }

  public getReported(): boolean {
    return this.reported;
  }

  public setReported(): void {
    this.reported = true;
  }
}