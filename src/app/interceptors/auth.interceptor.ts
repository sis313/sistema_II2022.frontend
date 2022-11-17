import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpClient
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from "rxjs/operators";
import { Config } from "../api"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  static accessToken = localStorage.getItem('token') ? localStorage.getItem('token') : '' ;
  static refreshToken =  localStorage.getItem('refresh') ? localStorage.getItem('refresh') : '' ;
  refresh = false;
  constructor(private http : HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthInterceptor.accessToken}`
      }
    })
    console.log("accessToken",localStorage.getItem("token"))
    console.log("refreshToken",localStorage.getItem("refresh"))
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse) => {
        if(err.status === 401 && !this.refresh){
          this.refresh = true;
          return this.http.post(`${Config.apiUrl}/auth/refreshtoken`,{refreshToken:AuthInterceptor.refreshToken})
            .pipe(
              switchMap((res:any)=>{
                AuthInterceptor.accessToken = res.accessToken;
                AuthInterceptor.refreshToken = res.refreshToken;
                return next.handle(req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${AuthInterceptor.accessToken}`
                  }
                }))
              })
            )
        }
        this.refresh = false;
        return throwError(()=>{err})
      })

    );
  }
}
