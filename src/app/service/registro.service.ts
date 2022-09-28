import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';
import { UserModel } from '../model/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  
  saveUser(User: UserModel){
    return this.http.post<any>(Config.apiUrl + '/v1/api/user', User);
  
  }
}
