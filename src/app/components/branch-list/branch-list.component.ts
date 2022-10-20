import { Component, OnInit } from '@angular/core';
import Swal from'sweetalert2';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { business } from 'src/app/model/Business';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { BusinesslistService } from 'src/app/service/businesslist.service';
import { branch } from 'src/app/model/Branch';

import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  idParam!: number;
  inactive:branch[] = [];
  branchList:branch[] = [];

  constructor(private activatedRoute: ActivatedRoute, private businessListService: BusinesslistService,private router: Router) {}

  async ngOnInit(): Promise<void> {

    this.branchList = await this.getBranchData();
    
  }

  async getBranchData(){
    this.idParam = this.activatedRoute.snapshot.params.id;
    let respuesta!:branch[];
    await this.businessListService.getListBranch(this.idParam).toPromise().then((response) => {
      respuesta = response;
      console.log(respuesta);
    }).catch(e => console.error(e));

    return respuesta;
  }

  

}
