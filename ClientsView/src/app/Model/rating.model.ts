export interface RatingDto{
    idRating: number;
    score: number;
    favoriteStatus: boolean;
    idBranch: number;
    idUser: number;
}

export class Rating{


    constructor (
        {idRating, score,
            favoriteStatus, idBranch, idUser}: RatingDto = {
                idRating: 0,
                score: 0,
                favoriteStatus: true,
                idBranch: 0,
                idUser: 0
             }){
      idRating = idRating;
      score = score;
      favoriteStatus = favoriteStatus;
      idBranch = idBranch;
      idUser = idUser;
    }
}