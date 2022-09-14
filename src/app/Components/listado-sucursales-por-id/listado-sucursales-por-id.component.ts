import { Component, OnInit } from '@angular/core';
import { ListaSucursalService } from 'src/app/service/lista-sucursal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-sucursales-por-id',
  templateUrl: './listado-sucursales-por-id.component.html',
  styleUrls: ['./listado-sucursales-por-id.component.css']
})
export class ListadoSucursalesPorIDComponent implements OnInit {
  sucursales:any;

comentarios = [
  { nombre: 'carlos', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'ronaldo', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'victor', comentario: 'bien',fecha: '23/04/12' },

];

constructor(private service: ListaSucursalService,private router: Router) { 
  this.service.getSucursalesLocalhost().subscribe((data:any)=>{
    //console.warn(data)
    console.log(data)
    this.sucursales=data
    console.log(this.sucursales);
  });
  
}
  ngOnInit(): void {
  }
  actualizarSucursal(id:any){
    console.log("Ir a ruta de negocio:"+id);
    this.router.navigate(['editar-sucursal',id]);
  }

}
