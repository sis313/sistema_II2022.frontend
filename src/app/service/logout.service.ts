import { Injectable } from '@angular/core';
import {Config} from "../api";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


const API_URL = `${Config.apiUrl}/auth/signout`
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient,private  router : Router) { }
  logout(user:any){
    return this.http.post<any>(`${API_URL}?username=${user}`,{}).subscribe(
      {
        next: user =>{
          console.log(user)
          this.router.navigate(['/'])
        }
      }
    )
  }

}
