import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Zone } from '../Model/zone.model';

@Injectable({
  providedIn: 'root',
})

export class ZoneService{
    zone: Zone[] = [];
    constructor(private http: HttpClient){}
    
    setZone(data: Zone[]){
        this.zone = data;
    }
    getZone(){
        return this.zone;
    }
}
