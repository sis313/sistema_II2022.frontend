import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ListaSucursalService } from 'src/app/service/lista-sucursal.service';
import { SucursalService } from 'src/app/service/sucursal.service';
import { SucursalRating } from '../../model/SucursalRating';

@Component({
  selector: 'app-listado-sucursal-rating',
  templateUrl: './listado-sucursal-rating.component.html',
  styleUrls: ['./listado-sucursal-rating.component.css']
})
export class ListadoSucursalRatingComponent implements OnInit {
  idNegocio: Object[] = [];
  listadoSucursales:any=[];
  constructor(private fb: FormBuilder,private sucursalService:SucursalService,private service: ListaSucursalService,public modalRef: MdbModalRef<ListadoSucursalRatingComponent>) {

  }
  listadoRating:SucursalRating[]=[];
  ngOnInit(): void {
    
    this.service.getSucursalesLocalhost(this.idNegocio).subscribe((data:any)=>{
      console.warn(data)
      this.listadoSucursales=data;
      console.log(data[0].idBranch)
      for(let i=0;i<this.listadoSucursales.length;i++){
        this.sucursalService.getRatingSucursalID(data[i].idBranch).subscribe((data2:any)=>{
          console.log(data2.averageScore);
          let rating={
            "address":this.listadoSucursales[i].address,
            "rating":data2.averageScore,
            "id_rating":"rating"+this.listadoSucursales[i].idBranch
          }
          console.log(rating);
          this.listadoRating.push(rating);
        })
      }
    });
  }
  buscarRating(idBranch: any):any {

    
  }
  

}