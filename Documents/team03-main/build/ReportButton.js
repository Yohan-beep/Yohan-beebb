import ChoiceButton from './ChoiceButton.js';
export default class ReportButton extends ChoiceButton {
    reported;
    constructor(x, y, idx, imgsrc, hoverimgsrc, content) {
        super(x, y, idx, imgsrc, hoverimgsrc, content);
        this.reported = false;
    }
    getReported() {
        return this.reported;
    }
    setReported() {
        this.reported = true;
    }
}
//# sourceMappingURL=ReportButton.js.map