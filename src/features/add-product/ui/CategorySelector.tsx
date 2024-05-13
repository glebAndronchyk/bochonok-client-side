import { CategoriesListBox } from "../../../shared/ui";
import { IListBoxProps } from "../../../shared/ui/ListBox/types";
import { InputFieldWrapper } from "../../../shared/ui/InputFieldWrapper/InputFieldWrapper";
import { IInputFieldProps } from "../../../shared/ui/Input/types/IInputFieldProps";

interface ICategorySelectorProps
  extends Pick<IListBoxProps, "onChange">,
    Pick<
      IInputFieldProps,
      "label" | "description" | "disabled" | "errorMessage"
    > {
  activeCategory: string | null;
}

export const CategorySelector = ({
  activeCategory,
  onChange,
  label,
  disabled,
  description,
}: ICategorySelectorProps) => {
  return (
    <InputFieldWrapper
      label={label}
      description={description}
      disabled={disabled}
    >
      <CategoriesListBox activeCategory={activeCategory} onChange={onChange} />
    </InputFieldWrapper>
  );
};
