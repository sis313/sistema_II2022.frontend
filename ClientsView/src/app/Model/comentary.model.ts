export interface ComentaryDto{
    idComentario: number;
    nombre: string;
    idUsuario: number;
    stock: any;
    estado: number;
}
export class Comentary{
    public id_comment: number = 0;
    public message: string = "";
    public id_user: number = 0;
    public id_business: number = 0;
    public status: number = 0;

    constructor (id_comment: number, message: string,
        id_user: number, id_business: number, status: number) {
            this.id_comment = id_comment;
            this.message = message;
            this.id_user = id_user;
            this.id_business = id_business;
            this.status = status;
        }
}