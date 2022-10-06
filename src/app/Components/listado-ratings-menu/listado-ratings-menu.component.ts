import { Component, OnInit } from '@angular/core';
import { SucursalRating } from 'src/app/model/SucursalRating';
import { ListaNegocioService } from 'src/app/service/lista-negocio.service';
import { ListaSucursalService } from 'src/app/service/lista-sucursal.service';
import { ListadoHelperService } from 'src/app/service/listado-helper.service';
import { SucursalService } from 'src/app/service/sucursal.service';

@Component({
  selector: 'app-listado-ratings-menu',
  templateUrl: './listado-ratings-menu.component.html',
  styleUrls: ['./listado-ratings-menu.component.css']
})
export class ListadoRatingsMenuComponent implements OnInit {
  negocioSeleccionado:any;
  negocios:any | undefined;
  listadoRating:SucursalRating[]=[];
  listadoSucursales:any=[];

  constructor(private sucursalService:SucursalService,private service: ListaSucursalService,private listadoHelperService:ListadoHelperService,private listaNegocioService:ListaNegocioService) { }

  ngOnInit(): void {
    this.obtenerNegocios();

  }
  buscar(){
    this.listadoRating=[];
    console.log(this.negocioSeleccionado);
    this.listadoHelperService.cambiarIdNegocio(this.negocioSeleccionado.idBusiness);
    this.service.getSucursalesLocalhost(this.negocioSeleccionado.idBusiness).subscribe((data:any)=>{
      console.log(data[0].idBranch)
      console.log(data)
      this.listadoSucursales=data;
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
  
  obtenerNegocios(){
    this.listaNegocioService.getNegociosDeUsuarioPorID(1).subscribe((data:any)=>{
      console.log(data)
      this.negocios=data
      this.negocioSeleccionado=this.negocios[0];
      this.buscar();
    })
    console.log("OBTENER NEGOCIOS");
    console.log(this.negocios);
  }
}
