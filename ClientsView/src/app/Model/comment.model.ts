export class Comment{
    constructor(
        public idComment: number,
        public message: string,
        public idBusiness: number,
        public status: number
        ){
            this.idComment = idComment;
            this.message = message;
            this.idBusiness = idBusiness;
            this.status = status;
        }
}