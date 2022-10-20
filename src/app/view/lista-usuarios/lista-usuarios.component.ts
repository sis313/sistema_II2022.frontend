import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UsersService } from 'src/app/service/users.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
  user:any;
  constructor(private router: Router,private route:ActivatedRoute, private userService: UsersService) { }


  ngOnInit(): void {
    this.getUsers()
  }
  alertaedit(){
    Swal.fire({
      icon: 'success',
      title: 'Edicion exitosa',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar' ,
      confirmButtonColor: '#6b7a40',

      buttonsStyling: true,
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe(data =>{
     
        this.dataset = data
        console.log( this.dataset)

        
    })
  }

  setUser(user:any){
    this.user= user; 
  }

}
