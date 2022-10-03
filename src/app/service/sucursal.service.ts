import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  constructor(private http: HttpClient) { }
  getSucursalPorID(id: any) {
    console.log("SucursalService Traer sucursal con ID:"+id);
    return this.http.get("http://localhost:8080/api/branch/"+id);
  }
  actualizarSucursal(id:any,datos:any){
    console.log("Actualizar "+id);
    return this.http.put("http://localhost:8080/api/branch/"+id,datos);
  }
  getRatingSucursalID(id:any){
    return this.http.get("http://localhost:8080/api/rating/?branchId="+id);
  }
}
