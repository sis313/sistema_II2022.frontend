import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {environment} from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl'
import { Router } from '@angular/router';


import { DomSanitizer } from '@angular/platform-browser';
import { EditServiceService } from 'src/app/service/edit-service.service';
import Swal from 'sweetalert2'
import { ListaNegocioService } from 'src/app/service/lista-negocio.service';
import { NegocioService } from 'src/app/service/negocio.service';
import { ListadoHelperService } from 'src/app/service/listado-helper.service';
import { TiposNegocioService } from 'src/app/service/tipos-negocio.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ListadoSucursalRatingComponent } from '../listado-sucursal-rating/listado-sucursal-rating.component';

@Component({
  selector: 'app-edit-service',
  templateUrl: './editar-servicios.component.html',
  styleUrls: ['./editar-servicios.component.css']
})
export class EditarServiciosComponent implements OnInit {
  nuevo_nombre:any;
  actualizarServicio() {
    let nombre=(this.nuevo_nombre=="")?this.negocioSeleccionado.name:this.nuevo_nombre;
    console.log(this.nuevo_nombre);
    console.log(this.desc_act);
    console.log(this.tipo_act);
    console.log(this.mostrar);
    let data={
      "name": this.nuevo_nombre,
      "description": this.desc_act,
      "idTypeBusiness": this.tipo_act,
      "idUser": 1,
      "createDate": "2008-01-02",
      "updateDate": "2008-01-02",
      "status": (this.mostrar)?1:0
    }
    this.editServiceService.actualizarNegocio(data,this.negocioSeleccionado.idBusiness).subscribe((data:any)=>{
      console.log(data)
    })
  }
  negocioSeleccionado:any;
  negocios:any | undefined;
  id_negocio:String="";
  nombre_act:any;
  desc_act:any;
  tipo_act:any;
  mostrar:any;
  listaTiposNegoocio:any;

  constructor(private modalService: MdbModalService,private tiposNegocioService:TiposNegocioService,private listadoHelperService:ListadoHelperService,private sanitizer:DomSanitizer, private router: Router,private editServiceService:EditServiceService,private listaNegocioService:ListaNegocioService,private negocioService:NegocioService) { 
  }
  obtenerNegocios(){
    this.listaNegocioService.getNegociosDeUsuarioPorID(1).subscribe((data:any)=>{
      console.log(data)
      this.negocios=data
      this.negocioSeleccionado=this.negocios[0];
      this.id_negocio=this.negocios[0].idTypeBusiness;
      this.buscar();
    })
    console.log("OBTENER NEGOCIOS");
    console.log(this.negocios);
  }
  obtenerTiposNegocio() {
    this.tiposNegocioService.getTiposNegocio().subscribe((data:any)=>{
      console.log(data)
      this.listaTiposNegoocio=data;
      this.tipo_act=this.negocioSeleccionado.idTypeBusiness;
    })  
  }
  ngOnInit(): void {
    this.id_negocio="1";
    this.obtenerNegocios();
    this.obtenerTiposNegocio();
  }
  buscar(){
    console.log(this.negocioSeleccionado);
    this.desc_act=this.negocioSeleccionado.description;
    this.mostrar=(this.negocioSeleccionado.status==1)?true:false;
    this.listadoHelperService.cambiarIdNegocio(this.negocioSeleccionado.idBusiness);
    
  }
  modalRef: MdbModalRef<ListadoSucursalRatingComponent> | null = null;
  mostrarRatings(){
    this.modalRef = this.modalService.open(ListadoSucursalRatingComponent, {
      data: { idNegocio: this.id_negocio },
    });
  }
}
