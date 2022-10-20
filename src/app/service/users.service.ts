import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = Config.apiUrl+"/v1/api/user"

  constructor(private http : HttpClient) { }

  getUser(username: string){
   return this.http.get(this.API_URL+"/username?username="+username);
  }

  getUsers(){
    return this.http.get<any>(this.API_URL)
  }
}
