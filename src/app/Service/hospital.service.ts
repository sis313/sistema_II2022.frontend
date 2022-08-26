import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpEvent,HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  Peurl='http://localhost:8080';
  httpOptions  = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  constructor(private http:HttpClient) { }
 

  public all():Observable<any[]> {
    return this.http.get<any[]>(this.Peurl+`/v1/hospital/list/all`,this.httpOptions);
  }

}
