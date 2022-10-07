import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alertacierre(){
    Swal.fire({

      title: "¿Cerrar sesion?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }) .then(resultado => {
      if (resultado.value) {
        localStorage.setItem('token', '');
        localStorage.setItem('username', '');
        window.location.href = "/";
      }
    });
  }
}
