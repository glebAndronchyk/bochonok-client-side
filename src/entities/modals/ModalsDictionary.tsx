import { Observer } from "mobx-react";
import { Modal } from "../../shared/ui";
import { ISimplifiedModalProps } from "../../shared/ui/Modal/types";
import { AddCategoryForm } from "../../features/add-category";
import { PropsWithChildren } from "react";
import { AddProductForm } from "../../features/add-product";
import { QRCodeTabs } from "../../features/share";
import { IQRCodeTabsProps } from "../../features/share/types/IQRCodeTabsProps";

const Observed = ({ children }: PropsWithChildren) => {
  return <Observer>{() => <>{children}</>}</Observer>;
};

// TODO: should be record
const processContentProps = <T extends object>(contentProps: unknown): T => {
  return (typeof contentProps === "object" ? contentProps : {}) as T;
};

export const ModalsDictionary = {
  addCategory: ({ contentProps, ...props }: ISimplifiedModalProps) => (
    <Observed>
      <Modal title="Add new category" {...props}>
        <AddCategoryForm {...processContentProps(contentProps)} />
      </Modal>
    </Observed>
  ),
  addProduct: ({ contentProps, ...props }: ISimplifiedModalProps) => (
    <Observed>
      <Modal title="Add new product" {...props}>
        <AddProductForm {...processContentProps(contentProps)} />
      </Modal>
    </Observed>
  ),
  share: ({ contentProps, ...props }: ISimplifiedModalProps) => (
    <Observed>
      <Modal title="Share" {...props}>
        <QRCodeTabs {...processContentProps<IQRCodeTabsProps>(contentProps)} />
      </Modal>
    </Observed>
  ),
};
