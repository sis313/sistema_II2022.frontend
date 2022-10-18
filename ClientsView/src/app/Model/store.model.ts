export class Store{
    constructor(public idBusiness: number,public name: string, 
        public description: string, public idUser: number,
        public createDate: string, public updateDate: string, 
       public status: number) {
        this.idBusiness = idBusiness;
        this.name = name;
        this.description = description;
        this.idUser = idUser;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.status = status
        
    }

}