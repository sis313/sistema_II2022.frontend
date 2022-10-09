
export interface LocationDto{
    idLocation: number;
    latitude: number,
    longitude: number

}

export class Location{

    constructor(public idLocation: number, public latitude: string,  public longitude: string){
        this.idLocation = idLocation;
        this.latitude = latitude;
        this.longitude = longitude;

    }
}