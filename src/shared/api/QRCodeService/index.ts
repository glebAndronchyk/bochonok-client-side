import { ApiServiceBase } from "../ApiServiceBase";
import { IQRCodes } from "../../types/api/qr-code";

export class QRCodeService extends ApiServiceBase {
  constructor() {
    super();
  }

  getQRCodes = async (url: string, categoryId?: string | null) => {
    return this.post<IQRCodes>("QrCodes/", JSON.stringify({ url, categoryId }));
  };
}

export const qrcodeService = new QRCodeService();
