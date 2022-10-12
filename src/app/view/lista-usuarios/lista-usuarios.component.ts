import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  constructor(private router: Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
  }
  alertaedit(){
    Swal.fire({
      icon: 'success',
      title: 'Edicion exitosa',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar' ,
      confirmButtonColor: '#6b7a40',

      buttonsStyling: true,
    })
  }
}
