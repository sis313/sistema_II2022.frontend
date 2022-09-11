export interface SubsidiaryDto{
    idSucursal: number;
    direccion: string;
    horaApertura: string;
    horaCierre: string;
    diasAtencion: string;
    //imagen ???
}

export class Subsidiary{
    public idSucursal: number;
    public direccion: string;
    public horaApertura: string;
    public horaCierre: string;
    public diasAtencion: string;

    constructor(
        {idSucursal, direccion, horaApertura, horaCierre, 
            diasAtencion}: SubsidiaryDto ={
                idSucursal: 0,
                direccion: '',
                horaApertura: '', 
                horaCierre: '',
                diasAtencion: '',
            }
    ){
        this.idSucursal = idSucursal;
        this.direccion = direccion;
        this.horaApertura = horaApertura;
        this.horaCierre = horaCierre;
        this.diasAtencion = diasAtencion;
    }
}