import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { loginModel } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';
import { UsersService } from 'src/app/service/users.service';
import Swal from 'sweetalert2';

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
  constructor(private loginService : LoginService, private router:Router, private userService: UsersService) { }

  
  
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
        this.getUser(this.userData.username)

      },
      (error)=>{
        console.log(error.error.status);
        
        Swal.fire({
          title: "Error",
          text: "Invalid password or nickname",
          icon: 'error'
        })
      }
    )
  }
  getUser(username:string){
    this.userService.getUser(username).subscribe((data) =>{
      console.log(data)
      let user:any = data;
      if(user.status==="Pending"){
          this.router.navigate(['verificacion'])
      }
      if(user.status==="Active"){
        Swal.fire({
          title: 'Succesful login',
          text: "You logged succesfuly",
          icon: 'success'  
        })
      }
    })
  }
}
