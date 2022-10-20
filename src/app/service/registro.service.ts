import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';
import { UserModel } from '../model/registro';

const API_URL = Config.apiUrl+"/v1/api/user"

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  
  saveUser(User: UserModel){
    return this.http.post<any>(API_URL+ '/publico/register', User);
  
  }
}
