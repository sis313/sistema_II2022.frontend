import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { CalTempService } from 'src/app/Service/calTemp.service';
import { Store } from 'src/app/Model/store.model';
import { StoreService } from 'src/app/Service/store.service';
//imp } from 'src/app/Model/calTemp.model';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/comment.model';


@Component({
  selector: 'app-cal-space',
  templateUrl: './cal-space.component.html',
  styleUrls: ['./cal-space.component.css']
})
export class CalSpaceComponent implements OnInit {
  textDescription: string = "";
  num: number=0;
  data: Store[] = [];
  comment: Comment[]= [];
  constructor(private storeService: StoreService, private router: Router,
    private commentService: CommentService ) {
      this.data = this.storeService.getStoreTemp();
      this.num =2;
     }
   
  ngOnInit(): void {
   this.onCharge();
  }

  onCharge(){
    console.log("estamos aca")
    console.log(this.data);
  }
  Calificar(){
    // for (let i in this.data){
    this.comment.push({
      idComment: this.num,
      message: this.textDescription,
      idBusiness: this.data[0].id_business,
      status: 1
    });
    this.commentService.setComment(this.comment);
    this.router.navigate(['/main']);
  // }
  }
  Volver(){
    this.router.navigate(['/main'])

  }
}
