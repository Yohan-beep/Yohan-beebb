export default class Helpers {
    static splitIntoLines(content, lineLength) {
        const words = content.split(' ');
        const lines = [];
        let line = '';
        while (words.length > 0) {
            const word = words.shift();
            if (line.length + word.length < lineLength)
                line = line.concat(' ', word);
            else {
                lines.push(line);
                line = word;
            }
        }
        lines.push(line);
        return lines;
    }
}
//# sourceMappingURL=Helpers.js.map