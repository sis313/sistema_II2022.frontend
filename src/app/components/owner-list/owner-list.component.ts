import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/User';
import { AdminlistService } from 'src/app/service/adminlist.service';
import { OwnerlistService } from 'src/app/service/ownerlist.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  active:user[] = [];
  ownerList:user[] = [];

  constructor(private ownerlistService: OwnerlistService,private router: Router) {}

  async ngOnInit(): Promise<void> {

    this.ownerList = await this.getOwnerData();
    
  }

  async getOwnerData(){
    let respuesta!:user[];
    await this.ownerlistService.getListOwner().toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));

    return respuesta;
  }

}
