import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/comment.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class ComentListComponent implements OnInit {
  comment : Comment[]= [];
  constructor(private commentService: CommentService, 
    private router: Router) { 
    this.comment = this.commentService.getComment();
  }
  exist : number = 0;
  ngOnInit(): void {
    this.onChange();
  }
  onChange(){
    if (this.comment.length >0){
      this.exist= 1 ;
    }
  }
  Volver(){
    this.router.navigate(['/main']);
  }

}
