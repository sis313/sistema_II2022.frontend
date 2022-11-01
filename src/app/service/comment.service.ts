import { Injectable } from "@angular/core";
import {Comment} from 'src/app/model/comment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root', 
})
export class CommentService {
    comment : Comment[]=[];
    constructor(private http: HttpClient) {}
  
    public lista(): Observable<Comment[]> {
      return this.http.get<Comment[]>('https://serviceprojectspring.herokuapp.com/api/comment');
    }

    setCommentHttp(data: any[]): Observable<any>{
        const headers = new HttpHeaders({'Content-Type': 'application/json'}); 
        const dataBackend = JSON.stringify(data);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log(dataBackend);
        return this.http.post<any>(
            'https://serviceprojectspring.herokuapp.com/api/comment',
            dataBackend, {'headers':headers} 
            // ).subscribe({
            //     next: data =>{
            //         console.log(data)
            //     },
            //     error: error => {
            //         this.errorMessage = error.message;
            //         console.error('There was an error!', error);
            //     }
        )
        
        }

}