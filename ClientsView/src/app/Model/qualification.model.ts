export interface QualificationDto{
    idCalificacion: number;
    estadoFavorito: boolean;
    puntuacion: number;
    idUsuario: number;
    idSucursal: number;
}

export class Qualification{
    public idCalificacion: number;
    public estadoFavorito: boolean;
    public puntuacion: number;
    public idUsuario: number;
    public idSucursal: number;

    constructor (
        {idCalificacion, estadoFavorito,
             puntuacion, idUsuario, idSucursal}: QualificationDto = {
                idCalificacion: 0,
                estadoFavorito: false,
                puntuacion: 0,
                idUsuario: 0,
                idSucursal: 0
             }
    ){
        this.idCalificacion = idCalificacion;
        this.estadoFavorito = estadoFavorito;
        this.puntuacion = puntuacion;
        this.idUsuario = idUsuario;
        this.idSucursal = idSucursal;
    }
}