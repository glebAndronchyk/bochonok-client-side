export class FileParser {
  static async tob64(file: File) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);

      fr.onload = function () {
        return resolve(fr.result as string);
      };

      fr.onerror = (error) => {
        reject(error);
      };
    });
  }
}
