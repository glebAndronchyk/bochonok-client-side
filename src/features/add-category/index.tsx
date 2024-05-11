import { Fieldset } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICategoryTransfer } from "../../shared/types/api/category/ICategory";
import { CategorySchema } from "../../shared/schemas/CategorySchema";
import {
  FileUploadInput,
  CheckboxField,
  InputField,
  Button,
} from "../../shared/ui";
import { useRootState } from "../../shared/wrappers/MobxProvider";
import { FileParser } from "../../shared/lib/parsers/FileParser";

const initialState: ICategoryTransfer = {
  description: "",
  title: "",
  image: null,
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

  const { modal } = useRootState();

  const onSubmit = async ({ image, ...data }: ICategoryTransfer) => {
    const imgB64 = await FileParser.tob64(image!);
    modal.closeModal();
  };

  return (
    <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset className="flex flex-col gap-4">
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
          name="image"
          render={({ field, fieldState }) => (
            <FileUploadInput
              label="Upload image*"
              description="Provide an image with ONLY ONE object in contrast"
              onChange={(event) => {
                field.onChange(event.target.files![0]);
              }}
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
