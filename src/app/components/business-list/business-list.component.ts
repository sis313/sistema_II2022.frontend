import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { business } from 'src/app/model/Business';
import { BusinesslistService } from 'src/app/service/businesslist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css'],
})
export class BusinessListComponent implements OnInit {
  inactive:business[] = [];
  businessList:business[] = [];
  public sidebarShow: boolean = false;

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


  async deleteBusiness(id: any) {
    Swal.fire({
      icon: 'warning',
      title: '¿Está seguro de eliminar negocio?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {
        await this.deleteBusinessById(id);
        console.log('SE ELIMINO AL NEGOCIO CORRECTAMENTE');
        await this.successNotificationDeleteCorrectly();
      }
    });
  }

  async deleteBusinessById(id: number) {
    this.businessListService
      .deleteBusiness(id)
      .toPromise()
      .then((response) => {})
      .catch((e) => console.error(e));
  }

  async successNotificationDeleteCorrectly() {
    Swal.fire({
      icon: 'success',
      title: 'Negocio eliminado correctamente',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
    }).then(async (result) => {
      if (result.value) {
        console.log('business List');
        await window.location.reload();
      }
    });
  }

  async editBusiness(id: any) {
    await this.router.navigateByUrl(`/updateBusiness/${id}`);
  }
}
