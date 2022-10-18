export class Branch {
  constructor(
    public idBranch: number,
    public address: string,
    public openHour: string,
    public closeHour: string,
    public attentionDays: string,
    public image: string,
    public latitude: number,
    public longitude: number,
    public businessName: number,
    public idZone: number
  ) {
    this.idBranch = idBranch;
    this.address = address;
    this.openHour = openHour;
    this.closeHour = closeHour;
    this.attentionDays = attentionDays;
    this.image = image;
    this.idZone = idZone;
    this.latitude = latitude;
    this.longitude = longitude;
    this.businessName = businessName;
  }
}
