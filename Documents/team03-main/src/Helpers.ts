export default class Helpers {
  public static splitIntoLines(content: string, lineLength: number): string[] {
    const words = content.split(' ');
    const lines = [];
    let line = '';
    while (words.length > 0) {
      const word = words.shift();
      if (line.length + word.length < lineLength) line = line.concat(' ', word);
      else {
        lines.push(line);
        line = word
      }
    }
    lines.push(line);
    return lines;
  }
}