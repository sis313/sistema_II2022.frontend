export class CalTemp{
    constructor(public id_business: number,public name: string, 
        public description: string, public id_type_business: number, public create_date: string,
        public update_date: string, 
       public status: number,  public user_id_user: number , ) {
        this.id_business = id_business;
        this.name = name;
        this.description = description;
        this.id_type_business = id_type_business;
        this.create_date = create_date;
        this.update_date = update_date;
        this.status = status
        this.user_id_user = user_id_user;
    }

}