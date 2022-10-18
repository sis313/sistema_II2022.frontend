export interface MunicipalitiesDto{
    idMunicipalities: number;
    name: string;
    idCity: number;

}
export class Municipalities {
    constructor({
        idMunicipalities,name,idCity
    }: MunicipalitiesDto ={
    idMunicipalities:  0,
    name: "",
    idCity:  0
    }){
        idMunicipalities = idMunicipalities;
        name = name;
        idCity = idCity;
    }
      
}