import { Component, OnInit } from '@angular/core';
import { Rating } from 'src/app/Model/rating.model';
import { RatingService } from 'src/app/Service/rating.service';


@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  ratingD: Rating [] = [];
  exist: number = 0;
  ratingData: Rating [] = [];
  constructor(private ratingC: RatingService) { }

  ngOnInit(): void {
    this.onCharge();
  }
  async onCharge(){
    this.ratingC
      .getRatingHttp()
      .toPromise()
      .then((data) =>{
        console.log(data);
        this.ratingD.push(data);
        this.ratingC.setRating(this.ratingD);
        console.log(this.ratingC.getRating());
        this.exist = 1;
        this.ratingData = data;
        console.log("aaaaaaaaaAA");
        console.log(this.ratingData);
      })
  }
}
