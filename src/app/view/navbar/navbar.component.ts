import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
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
      confirmButtonText: "Aceptar",
      confirmButtonColor: '#A8DEE0',
      cancelButtonText: "Cancelar",
      cancelButtonColor: '#A7D676',
    }) .then(resultado => {
      if (resultado.value) {
        localStorage.setItem('token', '');
        localStorage.setItem('username', '');
        window.location.href = "/";
      }
    });
  }
}
