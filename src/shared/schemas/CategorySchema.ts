import { z as x, ZodType } from "zod";
import { ICategoryTransfer } from "../types/api/category/ICategory";
import { ValidationHandler } from "../lib/schemas";

export const CategorySchema: ZodType<ICategoryTransfer> = x.object({
  title: ValidationHandler.requiredString("Title", 15),
  description: ValidationHandler.requiredString("Description", 30),
  image: x.instanceof(File),
  isFavorite: x.boolean(),
});
