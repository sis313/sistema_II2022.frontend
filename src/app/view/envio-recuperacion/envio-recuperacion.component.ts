import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/model/registro';
import { RecuperacionService } from 'src/app/service/recuperacion.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-envio-recuperacion',
  templateUrl: './envio-recuperacion.component.html',
  styleUrls: ['./envio-recuperacion.component.css']
})
export class EnvioRecuperacionComponent implements OnInit {
  username: string;
  user : UserModel;
  passwordForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private recuperacionService: RecuperacionService) { 
    this.route.queryParams.subscribe(params => {
      this.username = params['user'];
      });
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)])
    },{validators: this.checkPasswords})
  }
  
  ngOnInit(): void {
    console.log(this.username);
  }

  alertaregistro(){
    Swal.fire({
      title: 'Contraseña guardada',
      text: 'Vuelve a la pantalla de ingreso',
      icon: 'success',
      confirmButtonText: 'Volver'
    })
  }
  resetPassword(){
    this.user = new UserModel();
    this.user.nickname = this.username;
    this.user.password = this.passwordForm.get('password').value;
    this.recuperacionService.resetPassword(this.user).subscribe(
      data =>{
        console.log(data);
        this.alertaregistro();
      }
    )
  }
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value
    let confirmPass = group.get('passwordConfirm').value
    return pass === confirmPass ? null : { notSame: true }
  }

}
