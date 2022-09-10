export interface ComentaryDto{
    idComentario: number;
    nombre: string;
    idUsuario: number;
    stock: any;
    estado: number;
}
export class Comentary{
    public idComentario: number = 0;
    public nombre: string = "";
    public idUsuario: number = 0;
    public stock: any = {};
    public estado: number = 0;

    constructor (idComentario: number, nombre: string,
        idUsuario: number, stock: any, estado: number) {
            this.idComentario = idComentario;
            this.nombre = nombre;
            this.idUsuario = idUsuario;
            this.stock = stock;
            this.estado = estado;
        }
}