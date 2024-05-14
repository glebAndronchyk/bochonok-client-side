import { useLocation } from "react-router";
import { qrcodeService } from "../../../../shared/api/QRCodeService";
import { useEffect, useState } from "react";
import { IQRCodes } from "../../../../shared/types/api/qr-code";
import { IQRCodeTabsProps } from "../../types/IQRCodeTabsProps";

export const QRCodeTabs = ({ categoryId }: IQRCodeTabsProps) => {
  const location = useLocation();
  const [qrCodes, setQrCodes] = useState<IQRCodes | null>(null);

  useEffect(() => {
    qrcodeService
      .getQRCodes(location.pathname, categoryId)
      .then((q) => setQrCodes(q));
  }, [location]);

  return <div></div>;
};
