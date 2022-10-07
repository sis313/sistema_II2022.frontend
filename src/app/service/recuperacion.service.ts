import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';
import { UserModel } from '../model/registro';

const API_URL = Config.apiUrl

@Injectable({
  providedIn: 'root'
})
export class RecuperacionService {

  constructor(private http: HttpClient) { }

  recoverPassword(email: UserModel){
    return this.http.post<string>(API_URL + '/recover', email, {responseType: 'text' as 'json'});
  }

  resetPassword(user:UserModel){
    return this.http.post<string>(API_URL + '/reset-password',user, {responseType: 'text' as 'json'});
  }

}
