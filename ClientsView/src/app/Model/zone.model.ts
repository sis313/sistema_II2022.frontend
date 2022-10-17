export class Zone{
    public idZone: number = 0;
    public name: string = "";
    public idMunicipalities: number = 0;

    constructor(idZone: number, name: string, idMunicipalities: number) {
        this.idZone = idZone;
        this.name = name;
        this.idMunicipalities = idMunicipalities;
    }
}