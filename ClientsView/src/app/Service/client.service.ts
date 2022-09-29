import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../Model/client.model";


@Injectable({
    providedIn: 'root',
})
export class ClientService {
    client: Client[]= [];
constructor(private http:HttpClient) {
    
    }
    setClient(data: Client[]){
        this.client = data; 
    }
    getClient(){
        return this.client;
    }
    //Start http function if we wanna upload new data
    putClientHttp(){

    }
    //Start http function if we need read the actually data
    getClientHttp(){
        
    }
}