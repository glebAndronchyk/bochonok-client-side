export class FileHelper {
  static downloadImage(b64Image: string, fileName: string) {
    const a = document.createElement("a");
    a.href = b64Image;
    a.download = `${fileName}.png`;
    a.click();
  }
}
