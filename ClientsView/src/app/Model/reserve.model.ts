
export interface ReserveDto{
    idReserva: number;
    fecha: string;
    hora: string;
    cantidad: number;   

}

export class Reserve{
    public idReserva: number;
    public fecha: string;
    public hora: string;
    public cantidad: number;

    constructor(
        {idReserva, fecha, hora, cantidad}: ReserveDto ={
            idReserva: 0,
            fecha: '',
            hora: '',
            cantidad: 0,
        }
    ){
        this.idReserva = idReserva;
        this.fecha = fecha;
        this.hora = hora;
        this.cantidad = cantidad;
    }
}