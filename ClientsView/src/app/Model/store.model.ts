export interface StoreDto{
    idNegocio: number;
    NombreNegocio: string;
    contacto: number;
    descripcion: string;
    tipoNegocio: number;
    estado: string;
}
export class Store{
    constructor(public idNegocio: number,public NombreNegocio: string, 
        public contacto: number, public descripcion: string,
        public tipoNegocio: number , public estado: string) {
        this.idNegocio = idNegocio;
        this.NombreNegocio = NombreNegocio;
        this.contacto = contacto;
        this.descripcion = descripcion;
        this.tipoNegocio = tipoNegocio;
        this.estado = estado;
    }

}
export class StoreData{
    store: Store [] = [];
    constructor(){}
    setStoreName(data: Store []){
        this.store = data;
    }
    getStoreName(){
        return this.store;
    }
}