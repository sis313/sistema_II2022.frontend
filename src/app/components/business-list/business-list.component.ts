import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { business } from 'src/app/model/Business';
import { BusinesslistService } from 'src/app/service/businesslist.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css'],
})
export class BusinessListComponent implements OnInit {
  inactive:business[] = [];
  businessList:business[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer,private businessListService: BusinesslistService,private router: Router) {}

  async ngOnInit(): Promise<void> {

    this.businessList = await this.getBusinessData();
    
  }

  async getBusinessData(){
    let respuesta!:business[];
    await this.businessListService.getListBusiness().toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));

    return respuesta;
  }
  
  newChange(): void {
    this.router.navigateByUrl('/updateAdmin/1');
  }

}
