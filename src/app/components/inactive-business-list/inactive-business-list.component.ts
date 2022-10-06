import { Component, OnInit } from '@angular/core';
import Swal from'sweetalert2';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { business } from 'src/app/model/Business';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { BusinesslistService } from 'src/app/service/businesslist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inactive-business-list',
  templateUrl: './inactive-business-list.component.html',
  styleUrls: ['./inactive-business-list.component.css']
})
export class InactiveBusinessListComponent implements OnInit {

  inactive:business[] = [];
  businessList:business[] = [];

  constructor(private businessListService: BusinesslistService,private router: Router) {}

  async ngOnInit(): Promise<void> {

    this.businessList = await this.getInactiveBusinessData();
    
  }

  async getInactiveBusinessData(){
    let respuesta!:business[];
    await this.businessListService.getListInactiveBusiness().toPromise().then((response) => {
      respuesta = response;
      console.log(respuesta);
    }).catch(e => console.error(e));

    return respuesta;
  }

  async restoreBusiness(id: any,status:any) {
    Swal.fire({
      icon: 'warning',
      title: '¿Está seguro de activar negocio?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {
        await this.restoreBusinessById(id,status);
        console.log('SE RESTURÓ EL NEGOCIO CORRECTAMENTE');
        
      }
    });
  }

  async restoreBusinessById(id: number,status:any) {
    this.businessListService
      .restoreBusiness(id,status)
      .toPromise()
      .then((response) => {})
      .catch((e) => console.error(e));
  }


}
