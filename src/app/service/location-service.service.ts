import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private http: HttpClient) { }
  getLocationID(id:any){
    console.log("getLocationID")
    console.log(id);
    return this.http.get("http://localhost:8080/api/location/"+id);
  }
}
