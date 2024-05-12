import { ZodType, z as x } from "zod";
import { IProductTransfer } from "../types/api/product";
import { ValidationHandler } from "../lib/schemas";

export const ProductSchema: ZodType<IProductTransfer> = x.object({
  title: ValidationHandler.requiredString("Title", 15),
  description: ValidationHandler.requiredString("Description", 30),
  soldBy: ValidationHandler.requiredString("Sold by", 50),
  longDescription: ValidationHandler.requiredString("Long description", 150),
  price: x.coerce.number().min(0.01, "Price must be greater than 0"),
  image: x.instanceof(File),
  categoryId: ValidationHandler.requiredString("Category", 50),
});
