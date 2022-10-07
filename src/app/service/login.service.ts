import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../api';	
import { loginModel } from '../model/login';

const API_URL = Config.apiUrl+"/auth/signin";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: loginModel): Observable<any> {
    return this.http.post(API_URL, login);
  }
}
