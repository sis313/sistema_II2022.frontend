import { Component, OnInit } from '@angular/core';
import { ListaSucursalService } from 'src/app/service/lista-sucursal.service';

@Component({
  selector: 'app-lista-sucursal',
  templateUrl: './lista-sucursal.component.html',
  styleUrls: ['./lista-sucursal.component.css']
})
export class ListaSucursalComponent implements OnInit {

  sucursales = [
    { nombre: 'En obrajes', estado: 'Cerrado',horario: '12:00 a 14:00' },
    { nombre: 'asdasdas', estado: 'Cerrado',horario: '12:00 a 14:00' },
    { nombre: 'En obrajes', estado: 'Cerrado',horario: '12:00 a 14:00' },
    { nombre: 'asdasdas', estado: 'Cerrado',horario: '12:00 a 14:00' },
];

comentarios = [
  { nombre: 'carlos', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'ronaldo', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'victor', comentario: 'bien',fecha: '23/04/12' },

];

constructor(private service: ListaSucursalService) { 
  /*this.service.getSucursales().subscribe(data=>{
    //console.warn(data)
    console.log(data)
  })*/
}
  ngOnInit(): void {
  }

}
