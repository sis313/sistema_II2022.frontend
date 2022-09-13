import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "../Model/store.model";


@Injectable({
    providedIn: 'root', 
})


export class StoreService { 
    storeList: Store []=[];
    constructor(private http:HttpClient){
        
    }
    

    getStoreNameHttp( nameStore: string){
        return  this.http.get<Store[]>('http://localhost:8080/Business/name/'+nameStore);
    }
    getStoreTypeHttp( typeStore: string){
        return  this.http.get<Store[]>('http://localhost:8080/Business/Type/'+typeStore);
    }
    getStoreTypeAndNameHttp( typeStore: string, nameStore: string){
        return  this.http.get<Store[]>('http://localhost:8080/Business/filter/'+typeStore+'/'+nameStore);
    }
    
}
