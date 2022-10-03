import { Component, OnInit ,Input} from '@angular/core';
import { ListaSucursalService } from 'src/app/service/lista-sucursal.service';
import { Router } from '@angular/router';
import { ListadoHelperService } from 'src/app/service/listado-helper.service';


@Component({
  selector: 'app-listado-sucursales-por-id',
  templateUrl: './listado-sucursales-por-id.component.html',
  styleUrls: ['./listado-sucursales-por-id.component.css']
})
export class ListadoSucursalesPorIDComponent implements OnInit {
  sucursales:any;
id_negocio:any;
comentarios = [
  { nombre: 'carlos', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'ronaldo', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'victor', comentario: 'bien',fecha: '23/04/12' },

];
constructor(private listadoHelperService:ListadoHelperService,private service: ListaSucursalService,private router: Router) { 

  
}
  ngOnInit(): void {
    this.listadoHelperService.cambiosIdNegocioObservable.subscribe((id_negocio)=>{
      this.id_negocio=id_negocio;
      this.buscarSucursales(this.id_negocio);
    });
  }
  buscarSucursales(id:any){
    this.service.getSucursalesLocalhost(id).subscribe((data:any)=>{
      //console.warn(data)
      console.log(data)
      this.sucursales=data
      console.log(this.sucursales);
    });
  }
  actualizarSucursal(id:any){
    console.log("Ir a ruta de negocio:"+id);
    this.router.navigate(['editar-sucursal',id]);
  }

}
