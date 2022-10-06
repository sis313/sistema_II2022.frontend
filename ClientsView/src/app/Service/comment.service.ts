import { Injectable } from "@angular/core";
import { Comment } from "../Model/comment.model";
import { HttpClient } from "@angular/common/http";

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

}