import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/comment.model';
import { Router } from '@angular/router';
import { Store } from 'src/app/Model/store.model';
import { StoreService } from 'src/app/Service/store.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class ComentListComponent implements OnInit {
  comment: Comment[] = [];
  data: Store[] = [];

  constructor(private commentService: CommentService, 
    private router: Router, 
    private storeService: StoreService) {
    //this.comment = this.commentService.getComment();
    this.data = this.storeService.getStoreTemp();
  }
  exist: number = 0;
  ngOnInit(): void {
    // this.comment.push({
    //   idComment: 6,
    //   message: 'sdada',
    //   idUser: 3,
    //   idBusiness: 1,
    //   status: 1,
    // });
    this.onChange();
  }
  onChange() {
    this.commentService
    .getCommentStore(this.data[0].idBusiness)
    .toPromise()
    .then((data) => {
      console.log(data)
      this.comment.push(data);
      console.log(this.comment.length);
      if (this.comment.length > 0) {
        this.exist = 1;
        //onsole.log
      }
    })
    //c
    
  }
 
  Volver() {
    // this.router.navigate(['/main']);
    console.log(this.comment);
  }
}
