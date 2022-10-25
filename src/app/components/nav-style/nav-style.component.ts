import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav-style',
  templateUrl: './nav-style.component.html',
  styleUrls: ['./nav-style.component.scss']
})
export class NavStyleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  async successNotificationDeleteCorrectly() {
    Swal.fire({
      icon: 'warning',
      title: '¿Está seguro de cerrar sesión?',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
    }).then(async (result) => {
      if (result.value) {
        console.log('main');
        this.router.navigateByUrl('/main');
      }
    });
  }
  
}
