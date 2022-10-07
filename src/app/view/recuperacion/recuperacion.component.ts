import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import { UserModel } from 'src/app/model/registro';
import { RecuperacionService } from 'src/app/service/recuperacion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {

  constructor(private recuperacionService: RecuperacionService) { }
  
  emailForm: FormGroup
  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  
  recoverPassword(){
    
    let email = new UserModel();
    email.email = this.emailForm.get('email').value;
    this.recuperacionService.recoverPassword(email).subscribe(
      data =>{
        console.log(data);
        Swal.fire({
          title:'Correo enviado',
          text: 'Se envio un correo a la direccion ingresada',
          icon: 'success',
          confirmButtonText: 'Volver'
        })
      }
    )
    
  }

}
