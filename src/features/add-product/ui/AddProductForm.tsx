import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IProductTransfer } from "../../../shared/types/api/product";
import { ProductSchema } from "../../../shared/schemas/ProductSchema";
import { Button, FileUploadInput, InputField } from "../../../shared/ui";
import { Fieldset } from "@headlessui/react";
import { Textarea } from "../../../shared/ui/Textarea/Textarea";

const initialState: IProductTransfer = {
  title: "",
  description: "",
  price: 0,
  image: null,
  longDescription: "",
  categoryId: "",
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

  const onSubmit = (data: IProductTransfer) => {
    console.log(data);
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
        {/*<Controller*/}
        {/*  control={control}*/}
        {/*  name="price"*/}
        {/*  render={({ field, fieldState }) => (*/}
        {/*    <ControlledListBox*/}
        {/*      type="number"*/}
        {/*      label="Price*"*/}
        {/*      onChange={field.onChange}*/}
        {/*      value={field.value}*/}
        {/*      description="Price of the product"*/}
        {/*      errorMessage={fieldState.error?.message}*/}
        {/*    />*/}
        {/*  )}*/}
        {/*/>*/}
        <Controller
          control={control}
          name="longDescription"
          render={({ field, fieldState }) => (
            <Textarea
              value={field.value}
              errorMessage={fieldState.error?.message}
              onChange={field.onChange}
              label="Long Description"
              description="Describe product in detail"
            />
          )}
        />
      </Fieldset>
      <Button
        className="w-full mt-4"
        disabled={!isValid}
        variants={["md", "dark"]}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};
