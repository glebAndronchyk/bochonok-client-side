import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IListBoxProps } from "./types";
import { ScaleTransition } from "../transitions";

export const ListBox = ({ selectedValue, values, ...props }: IListBoxProps) => {
  return (
    <Listbox {...props} value={selectedValue} defaultValue={values[0]}>
      {({ open }) => (
        <>
          <ListboxButton className="p-2 roundend-md shadow-md border-green-500 bg-white text-black">
            {selectedValue.label}
          </ListboxButton>
          <ScaleTransition shown={open}>
            <ListboxOptions anchor="bottom">
              {values.map((value) => (
                <ListboxOption key={value.value} value={value}>
                  {value.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </ScaleTransition>
        </>
      )}
    </Listbox>
  );
};
