export interface ClientDto {
    idUuario: number;
    nombre: string;
    celular: number;
    idTipoUsuario: number;
    correoElectronico: string;
    contrasenia: string;
    estado: string;
}
export class Client{
    public idUuario: number;
    public nombre: string;
    public celular: number;
    public idTipoUsuario: number;
    public correoElectronico: string;
    public contrasenia: string;
    public estado: string;

    constructor(
        {idUuario,nombre,celular,idTipoUsuario,
            correoElectronico,contrasenia,estado}: ClientDto = {
                idUuario: 0,
                nombre: '',
                celular: 0,
                idTipoUsuario: 0, 
                correoElectronico: '',
                contrasenia: '',
                estado: '', 
            }
    ){
        this.idUuario = idUuario;
        this.nombre = nombre;
        this.celular = celular;
        this.idTipoUsuario = idTipoUsuario;
        this.correoElectronico = correoElectronico;
        this.contrasenia = contrasenia;
        this.estado = estado;
    }

}
