import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NegocioService} from 'src/app/service/negocio.service'
import { negocio } from 'src/app/model/negocio';
import { Router } from '@angular/router';
@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  constructor(private negocioService:NegocioService,private router: Router) { }
  nombre!:string;


  negocios!:negocio;

  tipoproductoid!:number;
  Descripcion!:string;

  ngOnInit(): void {
  }
  create(): void {
    const negocios = new negocio(this.nombre,this.Descripcion,this.tipoproductoid,1,"2020-12-12","2020-12-12",1)
    
    this.negocioService.createBusiness(negocios).subscribe(
      data => {
        console.log(data)
        //this.router.navigate(['/lista']);
      },
      err => {

        // this.router.navigate(['/']);
      }
    );

    Swal.fire(
      'NEGOCIO',
      'Registrado correctamente',
      'success'
    )

    this.router.navigate(['/adm/lista-negocio']);
  }
}
