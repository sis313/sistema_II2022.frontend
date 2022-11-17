import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {LogoutService} from "../../service/logout.service";
import {AuthInterceptor} from "../../interceptors/auth.interceptor";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

  constructor(private logoutService : LogoutService, private router :Router) { }

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
        const user = JSON.parse( localStorage.getItem("user"))
        console.log("user : ",user.nickname)
        this.logoutService.logout(user.nickname)
        AuthInterceptor.accessToken = ''
        AuthInterceptor.refreshToken = ''
        this.router.navigate([''])
      }
    });

  }
}
