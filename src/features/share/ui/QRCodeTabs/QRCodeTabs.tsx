import { useLocation } from "react-router";
import { qrcodeService } from "../../../../shared/api/QRCodeService";
import { useEffect, useState } from "react";
import { IQRCodes } from "../../../../shared/types/api/qr-code";
import { IQRCodeTabsProps } from "../../types/IQRCodeTabsProps";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Button, Image } from "../../../../shared/ui";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { FileHelper } from "../../../../shared/lib/helpers/files";

const tabs = ["Qr Code", "Category Qr Code"];

export const QRCodeTabs = ({ categoryId }: IQRCodeTabsProps) => {
  const location = useLocation();
  const [qrCodes, setQrCodes] = useState<IQRCodes | null>(null);

  useEffect(() => {
    qrcodeService
      .getQRCodes(location.pathname, categoryId)
      .then((q) => setQrCodes(q));
  }, [location]);

  return (
    <TabGroup className="px-2 pt-2">
      <TabList className="flex justify-between pb-1 border-b-2 border-b-gray-200 mb-2">
        {tabs.map((name) => (
          <Tab className="border-b-2 border-b-transparent transition-all data-[selected]:font-bold text-lg data-[selected]:border-b-green-500 p-0.5">
            {name}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {qrCodes &&
          Object.entries(qrCodes).map(([key, image]) => (
            <TabPanel className="min-h-[50vh] min-w-[50vh] relative">
              <Image alt={key} src={image} />
              <Button
                onClick={() => {
                  FileHelper.downloadImage(image, key);
                }}
                className="z-30 absolute right-0 top-6"
                variants={["dark", "md"]}
              >
                <ArrowDownTrayIcon className="w-6 h-6" />
              </Button>
            </TabPanel>
          ))}
      </TabPanels>
    </TabGroup>
  );
};
