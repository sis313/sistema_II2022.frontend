import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { CalTempService } from 'src/app/Service/calTemp.service';
import { Store } from 'src/app/Model/store.model';
import { StoreService } from 'src/app/Service/store.service';
//imp } from 'src/app/Model/calTemp.model';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/comment.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cal-space',
  templateUrl: './cal-space.component.html',
  styleUrls: ['./cal-space.component.css'],
})
export class CalSpaceComponent implements OnInit {
  textDescription: string = '';
  num: number = 0;
  currentRate = 0;
  user: number = 0;
  data: Store[] = [];
  commentPost: any[] = [];
  commentS: Comment[] = [];
  commentPH: any[] = [];
  comment: Comment[] = [];
  isFavorite: boolean = false;
  constructor(
    private storeService: StoreService,
    private router: Router,
    private commentService: CommentService
  ) {
    this.data = this.storeService.getStoreTemp();
    this.commentS = this.commentService.getComment();
    this.num = 2;
    this.user = Number(localStorage.getItem('token'));
  }

  ngOnInit(): void {
    this.onCharge();
  }
  /*
"idComment": 4,
    "message": "buen lugar",
    "idUser": 1,
    "idBusiness": 3,
    "status": 1
*/

  onCharge() {
    console.log('estamos aca');
    // this.data = [{
    //   idBusiness: 1,
    //   name: 'Business name example',
    //   description: 'Description 123',
    //   idTypeBusiness: 1,
    //   idUser: 1,
    //   createDate: '2022-01-01',
    //   updateDate: '2022-10-25',
    //   status: 1,
    // }];
    // console.log(this.data);
  }
  async Calificar() {
    /*if (this.commentS.length > 0) {
      for (let i in this.commentS) {
        this.commentPost.push({
          //idComment: this.commentS[i].idComment,
          message: this.commentS[i].message,
          idUser: this.user,
          idBusiness: this.commentS[i].idBusiness,
          status: 1,
        });
      }
    }
    this.commentPost.push({
      //idComment: 6,
      message: this.textDescription,
      idUser: this.user,
      idBusiness: this.data[0].idBusiness,
      status: 1,
    });
*/
  /* this.commentPost.push({
      //idComment: 6,
       "message": this.textDescription,
       "idUser": this.user,
       "idBusiness": this.data[0].idBusiness,
       "status": 1
     });*/
     let NewComment: Comment = {
      "message": this.textDescription,
      "idUser": this.user,
      "idBusiness": this.data[0].idBusiness,
      "status": 1
     }
     
     

    await this.commentService.setCommentHttp(NewComment).subscribe();

    // Swal.fire({
    //   title: "Registrado!",
    //   text: "El comentario fue registrado de manera exitosa!",
    //   icon: "success",
    //   buttons: ["Aww yiss!"],

    // });
    Swal.fire({
      title: '¡Comentario Registrado!',
      text: 'El comentario fue registrado de manera exitosa!',
      icon: 'success',
    });
    this.commentService.setComment(this.comment);
    this.router.navigate(['/main']);
  }

  async Favoritos() {
    //wait 1 second
    this.isFavorite = !this.isFavorite;
    await this.delay(1000);

    this.isFavorite = !this.isFavorite;
    if (this.commentS.length > 0) {
      for (let i in this.commentS) {
        this.comment.push({
         // idComment: this.commentS[i].idComment,
          message: this.commentS[i].message,
          idUser: this.user,
          idBusiness: this.commentS[i].idBusiness,
          status: 1,
        });
      }
    }
    this.comment.push({
     // idComment: this.num,
      message: 'Agregado a favoritos',
      idUser: this.user,
      idBusiness: this.data[0].idBusiness,
      status: 1,
    });
    // Swal.fire({
    //   title: "Registrado!",
    //   text: "El comentario fue registrado de manera exitosa!",
    //   icon: "success",
    //   buttons: ["Aww yiss!"],

    // });
    Swal.fire({
      title: 'Añadido a favoritos!',
      icon: 'success',
    });
    this.commentService.setComment(this.comment);
    this.router.navigate(['/main']);
  }
  Volver() {
    this.router.navigate(['/main']);
  }
  Rankin() {
    if (this.commentS.length > 0) {
      for (let i in this.commentS) {
        this.comment.push({
          //idComment: this.commentS[i].idComment,
          message: this.commentS[i].message,
          idUser: this.user,
          idBusiness: this.commentS[i].idBusiness,
          status: 1,
        });
      }
    }
    this.commentS.push({
     // idComment: this.num,
      message: 'Se le dio un rankin de ' + this.currentRate,
      idUser: this.user,
      idBusiness: this.data[0].idBusiness,
      status: 1,
    });
    // Swal.fire({
    //   title: "Registrado!",
    //   text: "El comentario fue registrado de manera exitosa!",
    //   icon: "success",
    //   buttons: ["Aww yiss!"],

    // });
    Swal.fire({
      title: 'Registrado!',
      text: 'Se registro el rankin!',
      icon: 'success',
    });
    this.commentService.setComment(this.comment);
    // this.router.navigate(['/main']);
  }
  // Function to disable button if lenght of comment is 0
  disableButton() {
    return this.textDescription.length > 0 ? false : true;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
