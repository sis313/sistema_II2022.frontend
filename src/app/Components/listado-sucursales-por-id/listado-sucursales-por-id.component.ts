import { Component, OnInit } from '@angular/core';
import { ListaSucursalService } from 'src/app/service/lista-sucursal.service';


@Component({
  selector: 'app-listado-sucursales-por-id',
  templateUrl: './listado-sucursales-por-id.component.html',
  styleUrls: ['./listado-sucursales-por-id.component.css']
})
export class ListadoSucursalesPorIDComponent implements OnInit {
  sucursales = [
    {attentionDays: 'Monday',closeHour: '06:01:01',createDate: '2021-12-31',direction: 'branch direction',idBranch: 4,idBusiness: 104,
    /*idLocation: 4,idZone: 4,image: "aW1hZ2UgZmlsZQ==",*/openHour: '06:01:01',status: 1,updateDate: '2021-12-31'},
];

comentarios = [
  { nombre: 'carlos', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'ronaldo', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'victor', comentario: 'bien',fecha: '23/04/12' },

];

constructor(private service: ListaSucursalService) { 
  this.service.getSucursales().subscribe((data:any)=>{
    //console.warn(data)
    console.log(data)
    this.sucursales=data
  })
}
  ngOnInit(): void {
  }

}
