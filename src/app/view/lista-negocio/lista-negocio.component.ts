import { Component, OnInit } from '@angular/core';
import { ListaNegocioService } from 'src/app/service/lista-negocio.service';

@Component({
  selector: 'app-lista-negocio',
  templateUrl: './lista-negocio.component.html',
  styleUrls: ['./lista-negocio.component.css']
})
export class ListaNegocioComponent implements OnInit {

  negocios = [
    { nombre: 'En obrajes', estado: 'Cerrado',horario: '12:00 a 14:00' },
    { nombre: 'En obrajessadsa', estado: 'Cerrado',horario: '12:00 a 14:00' },
    { nombre: 'En obrajessadsa', estado: 'Cerrado',horario: '12:00 a 14:00' },
    { nombre: 'En obrajessadsa', estado: 'Cerrado',horario: '12:00 a 14:00' },
];

  constructor(private service: ListaNegocioService) { 
    this.service.getNegocios().subscribe(data=>{
      //console.warn(data)
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

  eliminarNegocio(nombre: String) {
    if(confirm("Are you sure to delete "+nombre)) {
      console.log("Implement delete functionality here");
    }
  }
}
