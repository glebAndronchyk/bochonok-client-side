import { Observer } from "mobx-react";
import { Modal } from "../../shared/ui";
import { ISimplifiedModalProps } from "../../shared/ui/Modal/types";

export const ModalsDictionary = {
  addCategory: (props: ISimplifiedModalProps) => (
    <Observer>
      {() => (
        <Modal title="Add new category" {...props}>
          <div>123</div>
        </Modal>
      )}
    </Observer>
  ),
};
