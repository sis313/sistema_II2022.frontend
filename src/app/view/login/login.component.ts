import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin = true;
  userregister = false;
  userData: loginModel ; 

  loginForm: FormGroup;
  //Buttons clicks functionalities
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }
  constructor(private loginService : LoginService, private router:Router) { }

  
  
  ngOnInit(): void {
    this.userData = new loginModel();
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  login(){
    this.userData.username = this.loginForm.get('username').value;
    this.userData.password = this.loginForm.get('password').value;
    this.loginService.login(this.userData).subscribe(
      data => {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('username', this.userData.username);
        this.router.navigate(['verificacion']);

      }
    )
  }

}
