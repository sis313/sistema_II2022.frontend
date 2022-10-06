import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/comment.model';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class ComentListComponent implements OnInit {
  comment : Comment[]= [];
  constructor(private commentService: CommentService) { 
    this.comment = this.commentService.getComment();
  }

  ngOnInit(): void {
  }
  onChange(){
    
  }

}
