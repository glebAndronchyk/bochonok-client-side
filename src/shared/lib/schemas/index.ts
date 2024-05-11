import { z as x } from "zod";

export class ValidationHandler {
  static requiredString(title: string, max: number) {
    return x
      .string()
      .min(1, `${title} is required.`)
      .max(max, `Max length is ${max}.`);
  }
}
