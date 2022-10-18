import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from '../Model/branch.model';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  branch: Branch[] = [];
  branchTemp: Branch[] = [];
  constructor(private http: HttpClient) {}

  setBranchName(data: Branch[]) {
    this.branch = data;
  }

  getBranchName() {
    return this.branch;
  }
  getAllBranch() {
    return this.http.get<any>(
      'https://serviceprojectspring.herokuapp.com/api/branch/location'
    );
  }
}
