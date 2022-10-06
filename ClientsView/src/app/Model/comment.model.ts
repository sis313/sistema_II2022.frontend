export class Comment{
    public idComment: number =0;
        public message: string ="";
        public idBusiness: number =0;
        public status: number = 0;
    constructor(
         idComment: number,
         message: string,
         idBusiness: number,
         status: number
        ){
            this.idComment = idComment;
            this.message = message;
            this.idBusiness = idBusiness;
            this.status = status;
        }
}