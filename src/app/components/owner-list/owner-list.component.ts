import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/User';
import { AdminlistService } from 'src/app/service/adminlist.service';
import { OwnerlistService } from 'src/app/service/ownerlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent implements OnInit {
  active: user[] = [];
  ownerList: user[] = [];

  constructor(
    private ownerlistService: OwnerlistService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.ownerList = await this.getOwnerData();
  }

  async getOwnerData() {
    let respuesta!: user[];
    await this.ownerlistService
      .getListOwner()
      .toPromise()
      .then((response) => {
        respuesta = response;
      })
      .catch((e) => console.error(e));

    return respuesta;
  }

  async deleteOwner(id: any) {
    Swal.fire({
      icon: 'warning',
      title: '¿Está seguro de eliminar al dueño :O?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {
        await this.deleteOwnerById(id);
        console.log('SE ELIMINO AL DUEÑO');
        await this.successNotificationDeleteCorrectly();
      }
    });
  }

  async deleteOwnerById(id: number) {
    this.ownerlistService
      .deleteOwner(id)
      .toPromise()
      .then((response) => {})
      .catch((e) => console.error(e));
  }

  async successNotificationDeleteCorrectly() {
    let self = this;
    Swal.fire({
      icon: 'success',
      title: 'Dueño eliminado correctamente',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
    }).then(async (result) => {
      if (result.value) {
        console.log('owner List');
        await window.location.reload();
      }
    });
  }
}
