export class Producto {
    id?: number;
    nombre: string;
    precio: number;
    caracteristica: string;
    cantidad : number;
    medida : string;
   areaid: number;
    tipoproductoid: number;
    imagen:string;

    constructor(nombre: string, precio: number,caracteristica: string,cantidad : number,medida : string,areaid: number,tipoproductoid: number,imagen:string)  {
        this.nombre = nombre;
        this.precio = precio;
        this.caracteristica= caracteristica;
    this.cantidad = cantidad;
    this.medida =medida;
   this.areaid=areaid
    this.tipoproductoid = tipoproductoid;
    this.imagen = imagen;
    }
}
