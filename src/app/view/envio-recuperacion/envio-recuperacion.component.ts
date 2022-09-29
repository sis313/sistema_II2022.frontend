import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-envio-recuperacion',
  templateUrl: './envio-recuperacion.component.html',
  styleUrls: ['./envio-recuperacion.component.css']
})
export class EnvioRecuperacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
alertaregistro(){
  Swal.fire({
    title: 'Contraseña guardada',
    text: 'Vuelve a la pantalla de ingreso',
    icon: 'success',
    confirmButtonText: 'Volver'
  })
}
}
