import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/app/model/registro';
import { RegistroService } from 'src/app/service/registro.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public id:any;
  userlogin = true;
  userregister = false;

  UserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('',[Validators.email, Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    nickname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    password: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    userType: new FormControl('',[]),
    repeatedPassword: new FormControl('',[]),

  })

  //Buttons clicks functionalities
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }

  
  constructor(private route:ActivatedRoute, private registroService: RegistroService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe()
  }

  saveUser(){
    let user:UserModel = new UserModel();
    if(this.UserForm.value.password !== this.UserForm.value.repeatedPassword){
      alert("Las contraseñas no coinciden");
      return
    }
    if(this.UserForm === null)
      return 
    user.name = this.UserForm.value.name;
    user.email = this.UserForm.value.email;
    user.nickname = this.UserForm.value.nickname;
    user.password = this.UserForm.value.password;
    user.type = this.UserForm.value.userType;
    this.registroService.saveUser(user);
    console.log(this.UserForm.value);
  }



}
