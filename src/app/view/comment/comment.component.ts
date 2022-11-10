import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import {Comment} from 'src/app/model/comment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  id!:number;
  comment : Comment[]= [];
  com !: Comment;
  mensaje!:string;
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

  post_comment():void{
    const comm = new Comment(0,this.mensaje,1,this.id,1)
    
    this.commentService.create(comm).subscribe(
      data => {
        console.log(data)
        
      },
      err => {

        // this.router.navigate(['/']);
      }
    );

 
    this.router.navigate(['/adm/lista-negocio']);
  }

}
