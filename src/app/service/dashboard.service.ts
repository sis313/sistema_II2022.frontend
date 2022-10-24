import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getDashboardRatings(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/rating"
    return this.http.get(url);
  }

  getDashboardBranches(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/branch"
    return this.http.get(url);
  }

  getDashboardRatingsQuantities(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/custom/branchRatingCount"
    //http://localhost:8080/api/custom/branchRatingCount
    return this.http.get(url);
  }

  getGlobal(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/custom/logGlobalCount"
    return this.http.get(url);
  }

  getAnual(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/custom/logAnualCount"
    return this.http.get(url);
  }

  getSemester(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/custom/logSemesterCount"
    return this.http.get(url);
  }

  getQuarter(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/custom/logQuarterCount"
    return this.http.get(url);
  }

  getMonth(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/custom/logMonthCount"
    return this.http.get(url);
  }

  getDay(){
    let url  = "http://serviceprojectspring.herokuapp.com/api/custom/logDayCount"
    return this.http.get(url);
  }
  
}
