import { Observer } from "mobx-react";
import { Modal } from "../../shared/ui";
import { ISimplifiedModalProps } from "../../shared/ui/Modal/types";
import { AddCategoryForm } from "../../features/add-category";

export const ModalsDictionary = {
  addCategory: (props: ISimplifiedModalProps) => (
    <Observer>
      {() => (
        <Modal title="Add new category" {...props}>
          <AddCategoryForm />
        </Modal>
      )}
    </Observer>
  ),
};
