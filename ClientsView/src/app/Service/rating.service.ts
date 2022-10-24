import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rating } from '../Model/rating.model';

@Injectable({
  providedIn: 'root',
})

export class RatingService{
    rating: Rating [] =[];
    constructor(private http: HttpClient){}
    setRating(data: Rating []){
        this.rating = data;
    }
    getRating(){
        return this.rating;
    }
    getRatingHttp(){
        return this.http.get<any>('https://serviceprojectspring.herokuapp.com/api/rating');
    }
}