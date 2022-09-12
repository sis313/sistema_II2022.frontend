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
  data: business[] = [];
  columnsToDisplay: string[] = ['id', 'name', 'description','edit','delete'];
  businessList:business[] = [];
  displayedColumns: string[] = ['id', 'name', 'description','edit','delete'];
  dataSource = new MatTableDataSource();
  cad!:string;

  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private _liveAnnouncer: LiveAnnouncer,private businessListService: BusinesslistService,private router: Router) {}

  async ngOnInit(): Promise<void> {

      this.businessList = await this.getAdminData();
      this.dataSource.data = this.businessList;
  }

  async getAdminData(){
    let respuesta!:business[];
    await this.businessListService.getListBusiness().toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));

    return respuesta;
  }

  ngAfterViewInit(){
    this.dataSource.paginator= this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  newChange(): void {
    this.router.navigateByUrl('/updateAdmin/1');
  }

}
