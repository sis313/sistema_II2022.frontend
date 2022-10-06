import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { user } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class OwnerlistService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getListOwner(): Observable<user[]> {
    const url = `${this.baseUrl}user/type=2/status=1`;
    console.log(url);
    return this.http.get<user[]>(url);
  }

  deleteOwner(idOwner: number): Observable<void> {
    const url = `${this.baseUrl}/user/deleteOwner/${idOwner}`;
    return this.http.delete<void>(url);
  }
}
