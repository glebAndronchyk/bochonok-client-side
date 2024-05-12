import { Observer } from "mobx-react";
import { Modal } from "../../shared/ui";
import { ISimplifiedModalProps } from "../../shared/ui/Modal/types";
import { AddCategoryForm } from "../../features/add-category";
import { PropsWithChildren } from "react";
import { AddProductForm } from "../../features/add-product";

const Observed = ({ children }: PropsWithChildren) => {
  return <Observer>{() => <>{children}</>}</Observer>;
};

export const ModalsDictionary = {
  addCategory: (props: ISimplifiedModalProps) => (
    <Observed>
      <Modal title="Add new category" {...props}>
        <AddCategoryForm />
      </Modal>
    </Observed>
  ),
  addProduct: (props: ISimplifiedModalProps) => (
    <Observed>
      <Modal title="Add new product" {...props}>
        <AddProductForm />
      </Modal>
    </Observed>
  ),
};
