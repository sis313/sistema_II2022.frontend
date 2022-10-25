export class Comment{
    public idComment: number =0;
        public message: string ="";
        public idUser: number = 0;
        public idBusiness: number =0;
        public status: number = 0;
    constructor(
         idComment: number,
         message: string,
         idUser: number,
         idBusiness: number,
         status: number
        ){
            this.idComment = idComment;
            this.message = message;
            this.idUser = idUser;
            this.idBusiness = idBusiness;
            this.status = status;
        }
}