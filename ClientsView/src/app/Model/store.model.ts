export class Store {
  constructor(
    public idBusiness: number,
    public name: string,
    public description: string,
    public idUser: number,
    public idTypeBusiness: number,
    public createDate: string,
    public updateDate: string,
    public status: number
  ) {
    this.idBusiness = idBusiness;
    this.name = name;
    this.description = description;
    this.idUser = idUser;
    (this.idTypeBusiness = idTypeBusiness), (this.createDate = createDate);
    this.updateDate = updateDate;
    this.status = status;
  }
}

// [
//     {
//         "idBusiness": 1,
//         "name": "Business name example",
//         "description": "Description 123",
//         "idTypeBusiness": 1,
//         "idUser": 1,
//         "createDate": "2022-01-01",
//         "updateDate": "2022-10-25",
//         "status": 1
//     }
// ]
