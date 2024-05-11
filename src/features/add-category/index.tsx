import { Fieldset } from "@headlessui/react";
import { InputField } from "../../shared/ui/Input/Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../shared/ui";
import { ICategoryTransfer } from "../../shared/types/api/category/ICategory";
import { CategorySchema } from "../../shared/schemas/CategorySchema";
import { FileUploadInput } from "../../shared/ui/FileUploadInput";
import { CheckboxField } from "../../shared/ui/Checkbox/Checkbox";

const initialState: ICategoryTransfer = {
  description: "",
  title: "",
  imageB64: "",
  isFavorite: false,
};

export const AddCategoryForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ICategoryTransfer>({
    defaultValues: initialState,
    resolver: zodResolver(CategorySchema),
    mode: "onChange",
  });

  const onSubmit = (val: ICategoryTransfer) => console.log(val);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset>
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
              description="Make it interesting too"
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="imageB64"
          render={({ field, fieldState }) => (
            <FileUploadInput
              label="Upload image*"
              description="Provide a picture in which ONLY 1 object is clearly visible, on a contrasting one"
              onChange={field.onChange}
              value={field.value}
              accept="image/*"
            />
          )}
        />
        <Controller
          control={control}
          name="isFavorite"
          render={({ field }) => (
            <CheckboxField onChange={field.onChange} label="Mark as favorite" />
          )}
        />
        <Button disabled={!isValid} variants={["md", "dark"]} type="submit">
          Submit
        </Button>
      </Fieldset>
    </form>
  );
};
