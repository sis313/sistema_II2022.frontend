import { NumberValueAccessor } from "@angular/forms";

export class UserModel{
    idUser:number = 0;
    name:string = "";
    email:string = "";
    nickname:string = "";
    password:string = "";
    idTypeUser:string = "";
    roles: any [] = []
}