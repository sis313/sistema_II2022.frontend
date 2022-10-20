import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';
import { UserModel } from '../model/registro';



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
    return this.http.get<UserModel[]>(this.API_URL);
  }

  updateUser(user: UserModel){
    return this.http.put<UserModel>(this.API_URL,user);
  }
}
