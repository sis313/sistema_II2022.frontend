import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { City } from "../Model/city.model";

@Injectable({
    providedIn: 'root',
  })
export class CityService{
    city: City[] =[]
    constructor(private http: HttpClient){}

    setCity(data: City[]){
        this.city = data;
    }
    getCity(){
        return this.city;
    }

}