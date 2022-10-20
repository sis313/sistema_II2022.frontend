import { Time } from "@angular/common";

export interface branch {
    idBranch?: number;
    address: string;
    openHour: Time;
    closeHour: Time;
    attentionDays: String;
    image:String;
    createDate: Date;
    updateDate: Date;
    status: number;
    businessId: number;
  }
  