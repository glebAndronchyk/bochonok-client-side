import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IProductTransfer } from "../../../shared/types/api/product";
import { ProductSchema } from "../../../shared/schemas/ProductSchema";
import { FileUploadInput, InputField, SubmitButton } from "../../../shared/ui";
import { Fieldset } from "@headlessui/react";
import { Textarea } from "../../../shared/ui/Textarea/Textarea";
import { CategorySelector } from "./CategorySelector";
import { productsService } from "../../../shared/api/ProductsService";
import { FileParser } from "../../../shared/lib/parsers/FileParser";
import { IProductTransferB64 } from "../../../shared/types/api/product/IProductTransfer";
import { useRootState } from "../../../shared/wrappers/MobxProvider";

const initialState: IProductTransfer = {
  title: "",
  description: "",
  price: 1,
  image: null,
  longDescription: "",
  category: {
    value: "",
    label: "",
  },
  soldBy: "",
};

export const AddProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IProductTransfer>({
    defaultValues: initialState,
    resolver: zodResolver(ProductSchema),
    mode: "onChange",
  });
  const { modal, products } = useRootState();

  const onSubmit = async ({ image, category, ...data }: IProductTransfer) => {
    const imageB64 = await FileParser.tob64(image!);
    const product: IProductTransferB64 = {
      ...data,
      imageB64,
      categoryId: category.value,
    };
    await products.requestSimplifiedProductAddition(product);
    modal.closeModal();
  };

  return (
    <form className="p-2 w-[50vw]" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset className="grid grid-cols-2 gap-4">
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <InputField
              label="Enter title*"
              onChange={field.onChange}
              value={field.value}
              description="Make it interesting"
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field, fieldState }) => (
            <InputField
              label="Enter Description*"
              onChange={field.onChange}
              value={field.value}
              description="Explaint product in brief"
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="image"
          render={({ field, fieldState }) => (
            <FileUploadInput
              label="Upload image*"
              description="Your product image"
              onChange={(event) => {
                field.onChange(event.target.files![0]);
              }}
              accept="image/*"
            />
          )}
        />
        <Controller
          control={control}
          name="soldBy"
          render={({ field, fieldState }) => (
            <InputField
              label="Sold by*"
              onChange={field.onChange}
              value={field.value}
              description="Write the seller name"
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field, fieldState }) => (
            <InputField
              type="number"
              label="Price*"
              onChange={field.onChange}
              value={field.value}
              description="Price of the product"
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="category"
          render={({ field, fieldState }) => (
            <CategorySelector
              label="Category*"
              description="Relates to"
              errorMessage={fieldState.error?.message}
              activeCategory={field.value.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
        <Controller
          control={control}
          name="longDescription"
          render={({ field, fieldState }) => (
            <Textarea
              value={field.value}
              errorMessage={fieldState.error?.message}
              onChange={field.onChange}
              label="Long Description*"
              description="Describe product in detail"
            />
          )}
        />
      </Fieldset>
      <SubmitButton disabled={!isValid} />
    </form>
  );
};
