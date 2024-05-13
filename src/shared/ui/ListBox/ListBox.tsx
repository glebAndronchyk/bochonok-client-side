import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IListBoxProps } from "./types";
import { ScaleTransition } from "../transitions";
import { Chevron } from "../Chevron/Chevron";
import { CheckIcon } from "@heroicons/react/20/solid";

export const ListBox = ({ selectedValue, values, ...props }: IListBoxProps) => {
  return (
    <Listbox {...props} as="ul" value={selectedValue} defaultValue={values[0]}>
      {({ open }) => (
        <>
          <ListboxButton className="relative gap-1 flex text-white bg-green-500 rounded-md px-2 py-0.5">
            {selectedValue.label}
            <Chevron open={open} />
          </ListboxButton>
          <ScaleTransition shown={open}>
            <ListboxOptions
              className="no-scrollbar z-50 [--anchor-gap:1rem] w-28 p-2 bg-white rounded-md shadow-xl "
              anchor="bottom"
            >
              {values.map((item) => (
                <ListboxOption
                  as="li"
                  className=" flex items-center justify-between list-none data-[focus]:bg-green-500  rounded-md cursor-pointer p-1
                  data-[focus]:text-white  data-[focus]:transition-all data-[focus]:duration-200 data-[focus]:ease-in-out data-[focus]:hover:bg-green-500 data-[focus]:hover:text-white"
                  key={item.value}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      {item.label}
                      {(selected || selectedValue.value === item.value) && (
                        <CheckIcon className="w-5 h-5" />
                      )}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </ScaleTransition>
        </>
      )}
    </Listbox>
  );
};
