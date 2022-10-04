import { Injectable } from "@angular/core";
import { Type } from "../Model/type.model";
import { HttpClient } from "@angular/common/http";

@Injectable({ 
    providedIn: 'root',
})

export class TypeService{
    type: Type[] = [];
    constructor(private http: HttpClient){

    }
    setType(data: Type[]){
        this.type = data;
    }
    getType(){
        return this.type;
    }
    setTypeHttp(){

    }
    getTypeHttp(){
        
    }
}

