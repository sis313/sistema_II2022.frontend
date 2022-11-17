import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/comment.model';
import { Router } from '@angular/router';
import { Store } from 'src/app/Model/store.model';
import { StoreService } from 'src/app/Service/store.service';
import { CommentView } from 'src/app/Model/commentView.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class ComentListComponent implements OnInit {
  comment: Comment[] = [];
  commentView: CommentView[] = [];
  data: Store[] = [];
  user: number = 0;

  constructor(private commentService: CommentService, 
    private router: Router, 
    private storeService: StoreService) {
    //this.comment = this.commentService.getComment();
    this.data = this.storeService.getStoreTemp();
    this.user = Number(localStorage.getItem('token'));
    console.log("usuario aaaaaaaaaaaaaaaaaaaa "+this.user);
  }
  exist: number = 0;
  ngOnInit(): void {
  
    this.onChange();
  }
  onChange() {
    this.commentService
    .getCommentStore(this.data[0].idBusiness)
    .toPromise()
    .then((data) => {
      console.log(data)
      this.commentView = data;
      console.log(this.commentView.length);
      if (this.commentView.length > 0) {
        this.exist = 1;
        //onsole.log
      }
    })
    
    
  }
  async Editar(data: CommentView){
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Nuevo comentario',
      inputPlaceholder: 'Escribe tu nuevo comentario aca...',
      inputAttributes: {
        'aria-label': 'Escribe tu nuevo comentario aca...'
      },
      showCancelButton: true
    })
    
    if (text) {
      this.EditePut(data,text);
      //Swal.fire("edicion realizada");
    }
  }
  async EditePut(data: CommentView, newMessage: string){
    let updateComment:Comment = {
      "message": newMessage,
      "idUser": data.idUser,
      "idBusiness": data.idBusiness,
      "status": 1
    };
    await this.commentService.updateCommentHttp(updateComment,data.idComment).subscribe();
    Swal.fire({
      title: '¡Comentario Actualizado!',
      text: 'El comentario fue actualizado de manera exitosa!',
      icon: 'success',
    });
    this.router.navigate(['/main']);
  }
  async Eliminar(data: CommentView){
    console.log(data.idComment);
    await this.commentService.deleteCommentHttp(data.idComment).subscribe();
    Swal.fire({
      title: '¡Comentario Eliminado!',
      text: 'El comentario fue eliminado :c!',
      icon: 'success',
    });
    this.router.navigate(['/main']);
  }
  Volver() {
    // this.router.navigate(['/main']);
    console.log(this.comment);
  }
}
