export interface ProductDto{
   idProducto: number;
   nombre: string;
   detalle: string;
   stock: number;
   precio: number;
   descuento: number;
}

export class Product{
    public idProducto: number = 0;
    public nombre: string = "";
    public detalle: string = "";
    public stock: number = 0;
    public precio: number = 0;
    public descuento: number = 0;

    constructor (idProducto: number,
        nombre: string, detalle: string, stock: number,
        precio: number, descuento: number,){
            this.idProducto = idProducto;
            this.nombre = nombre;
            this.detalle = detalle;
            this.stock = stock;
            this.precio = precio;
            this.descuento = descuento;
        }
}