export class negocio{
    idBusiness!:number;
    name!:string;
    description!:string;
    idTypeBusiness!:number;
    idUser!:number;
    createDate!:string;
    updateDate!:string;
    status!:number;
    constructor(
        name:string,
        description:string,
        idTypeBusiness:number,
        idUser:number, 
        createDate:string,
        updateDate:string,status:number){
        this.name=name;
        this.description=description;
        this.idTypeBusiness=idTypeBusiness;
        this.idUser=idUser;
        this.createDate=createDate;
        this.updateDate=updateDate;
        this.status = status;
    }
}
