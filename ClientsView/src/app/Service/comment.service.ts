import { Injectable } from "@angular/core";
import { Comment } from "../Model/comment.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    comment : Comment[]=[];
    constructor(private http: HttpClient) {}
    setComment(data: Comment[]) {
        this.comment = data;
    }
    getComment(){
        return this.comment;
    }
    setCommentHttp(data: Comment[]): Observable<any>{
        const headers = { 'content-type': 'application/json'} 
        return this.http.post<any>(
            'https://serviceprojectspring.herokuapp.com/api/comment',
            data, {'headers':headers}
            )}

}