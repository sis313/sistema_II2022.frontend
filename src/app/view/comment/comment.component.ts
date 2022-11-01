import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/Service/comment.service';
import {Comment} from 'src/app/model/comment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  id!:number;
  comment : Comment[]= [];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params.id;

    this.commentService.lista().subscribe(
      data => {
        this.comment=data
        console.log(this.comment)
      },
      err => {
        console.log(err);
      }
    );
  }

}
