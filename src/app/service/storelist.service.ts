import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { businessbyzone } from '../model/BusinessByZone';
import { numberstore } from '../model/StoreList';

@Injectable({
  providedIn: 'root'
})
export class StorelistService {

  private baseUrl:string = environment.baseUrl;
  constructor(private http:HttpClient){ }
  
  getStoreList():Observable<numberstore[]>{
    const url = `${this.baseUrl}countBusiness`;
    console.log(url);
    return this.http.get<numberstore[]>(url);
  }
  getStoreByZone(idzone:number):Observable<businessbyzone[]>{
    const url = `${this.baseUrl}bussinesZone/${idzone}`;
    console.log(url);
    return this.http.get<businessbyzone[]>(url);
  }
}

