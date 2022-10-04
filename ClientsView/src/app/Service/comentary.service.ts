import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comentary } from "../Model/comentary.model";


@Injectable({   
    providedIn: 'root',
})

export class ComentaryService{
    comentary: Comentary[] = [];
    constructor(private http: HttpClient){
        
    }
    setComentary(data: Comentary[]){
        this.comentary = data;
    }
    getComentary(){
        return this.comentary;
    }
    setComentaryHttp(){

    }
    GetComentaryHttp(){
        
    }
}