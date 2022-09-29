import  { Injectable } from "@angular/core";
import { Reserve } from "../Model/reserve.model";
import { HttpClient } from "@angular/common/http";
@Injectable({ 
    providedIn: 'root',
})

export class ReserveService{
    reserve: Reserve[] = [];
    constructor(private http: HttpClient) {
        }
    setReserve(data: Reserve[]){
        this.reserve = data;
    }
    getReserve(){
        return this.reserve;
    }
    getReserveHttp(){

    }
    setReserveHttp(){
        
    }
}