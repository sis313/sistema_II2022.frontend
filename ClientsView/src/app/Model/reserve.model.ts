
export interface ReserveDto{
    idReserva: number;
    fecha: string;
    hora: string;
    cantidad: number;   

}

export class Reserve{

    constructor(public idReserva: number, public fecha: string,  public hora: string,  public cantidad: number){
        this.idReserva = idReserva;
        this.fecha = fecha;
        this.hora = hora;
        this.cantidad = cantidad;
    }
}