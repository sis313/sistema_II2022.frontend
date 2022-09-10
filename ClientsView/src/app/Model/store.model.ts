export interface StoreDto{
    idNegocio: number;
    NombreNegocio: string;
    contacto: number;
    descripcion: string;
    tipoNegocio: number;
    estado: string;
}
export class Store{
    public idNegocio: number = 0;
    public NombreNegocio: string = "";
    public contacto: number = 0;
    public descripcion: string = "";
    public tipoNegocio: number = 0;
    public estado: string = "";

    constructor(idNegocio: number,NombreNegocio: string, 
        contacto: number, descripcion: string,
        tipoNegocio: number ,estado: string) {
        this.idNegocio = idNegocio;
        this.NombreNegocio = NombreNegocio;
        this.contacto = contacto;
        this.descripcion = descripcion;
        this.tipoNegocio = tipoNegocio;
        this.estado = estado;
    }

}