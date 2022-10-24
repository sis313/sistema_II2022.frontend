export interface RatingDto{
    idRating: number;
    score: number;
    favoriteStatus: boolean;
    idBranch: number;
    idUser: number;
}

export class Rating{


    constructor (
        public idRating: number, public score: number,
        public   favoriteStatus: boolean, public idBranch: number, public idUser:number){
      idRating = idRating;
      score = score;
      favoriteStatus = favoriteStatus;
      idBranch = idBranch;
      idUser = idUser;
    }
}