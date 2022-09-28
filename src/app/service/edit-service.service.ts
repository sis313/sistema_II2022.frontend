import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpEvent,HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditServiceService {
  actualizarNegocio(datos:any,id:any) {
    // alert(
    //   JSON.stringify(datos)
    // );
    console.log("Actualizar negocio");
    return this.http.put("http://localhost:8080/api/business/"+id,datos);
  }

  Peurl='http://localhost:8080';
  httpOptions  = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  constructor(private http:HttpClient) { }
 

  public all():any {
    return '[{"id_business": 1,"name": "Tienda de Barrio Yapita","description":"That\'s my description","latitude": -16.541092,"longitude":-68.085096}]';
  }
}
