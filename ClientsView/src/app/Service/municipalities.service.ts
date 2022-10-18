import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Municipalities } from '../Model/municipalities.model';

@Injectable({
  providedIn: 'root',
})
export class MunicipalitiesService{
    municipalities: Municipalities[] = [];
    constructor(private http: HttpClient){}
    setMunicipalities(data: Municipalities[]){
        this.municipalities = data;
    }
    getMunicipalities(){
        return this.municipalities;
    }
}