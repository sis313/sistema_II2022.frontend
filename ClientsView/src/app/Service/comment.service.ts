import { Injectable } from "@angular/core";
import { Comment } from "../Model/comment.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    comment : Comment[]=[];
     url: string = 'https://serviceprojectspring.herokuapp.com';
    constructor(private http: HttpClient) {}
    setComment(data: Comment[]) {
        this.comment = data;
    }
    getComment(){
        return this.comment;
    }
    getCommentStore(idStore: number){
        let user= Number(localStorage.getItem('token'));
        return this.http.get<any>(this.url+`/api/comment/?businessId=${idStore}`)
    }
    setCommentHttp(data: Comment): Observable<any>{
        const httpOptions = new HttpHeaders({'Content-Type': 'application/json'}); 
        const dataBackend = JSON.stringify(data);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log(dataBackend);
        return this.http.post<Comment>(this.url+'/api/comment',data, {headers : httpOptions});
           
        
    }
    updateCommentHttp(data:Comment,idComment:number): Observable<any>{
        return this.http.put<Comment>(this.url+`/api/comment/${idComment}`,data);
    }

    deleteCommentHttp(idComment:number){
        console.log("llegamos a antes de eliminar");
        const httpOptions = new HttpHeaders({'Content-Type': 'application/json'}); 
        return this.http.delete<void>(this.url+`/api/comment/${idComment}`);
    }

}