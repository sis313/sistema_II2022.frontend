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
  styleUrls: ['./cal-space.component.css']
})
export class CalSpaceComponent implements OnInit {
  textDescription: string = "";
  num: number=0;
  user: number = 0;
  data: Store[] = [];
  commentS : Comment[] = [];
  commentPH: any[] = [];
  comment: Comment[]= [];
  constructor(private storeService: StoreService, private router: Router,
    private commentService: CommentService ) {
      this.data = this.storeService.getStoreTemp();
      this.commentS = this.commentService.getComment();
      this.num =2;
      this.user = Number(localStorage.getItem("token"));
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

  onCharge(){
    console.log("estamos aca")
    console.log(this.data);
  }
  async Calificar(){
    if (this.commentS.length>0){
     for (let i in this.commentS){
    this.comment.push({
      idComment: this.commentS[i].idComment,
      message: this.commentS[i].message,
      idUser: this.user,
      idBusiness: this.commentS[i].idBusiness,
      status: 1
    });
   
  }
}
this.commentS.push({
  idComment: 6,
  message: this.textDescription,
  idUser: this.user,
  idBusiness: this.data[0].idBusiness,
  status: 1
});
    
    // this.comment.push({
    //   idComment: 6,
    //   message: this.textDescription,
    //   idUser: this.user,
    //   idBusiness: this.data[0].idBusiness,
    //   status: 1
    // });
    // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    // console.log(this.comment);
    // // const dataBackend = JSON.stringify(this.comment);
    // // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2222222");
    // // console.log(dataBackend);

    // await this.commentService
    // .setCommentHttp(this.comment)
    // .subscribe();
   
    

    // Swal.fire({
    //   title: "Registrado!",
    //   text: "El comentario fue registrado de manera exitosa!",
    //   icon: "success",
    //   buttons: ["Aww yiss!"],

    // });
    Swal.fire({
      title: "Registrado!",
      text: "El comentario fue registrado de manera exitosa!",
      icon: 'success',
      
    })
    this.commentService.setComment(this.comment);
    this.router.navigate(['/main']);
   
  }
  Volver(){
    this.router.navigate(['/main'])

  }
}
