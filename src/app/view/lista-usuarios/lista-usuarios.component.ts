import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserModel } from 'src/app/model/registro';
import { UsersService } from 'src/app/service/users.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  pages: number = 1;
  dataset: UserModel[];
  filteredData : UserModel[]; 
  user:UserModel;
  roles:string;

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
        this.filteredData = this.dataset;
        console.log( typeof data[0].roles );
        console.log( this.dataset)
    })
  }

  setUser(user:UserModel){
    console.log(user);
    
    this.user= user; 
  }
  saveUser(){

    this.user.roles = [{
      name: this.roles
    }]
    console.log(this.user);
    
    this.userService.updateUser(this.user).subscribe(
      data =>{
        console.log(data);
        Swal.fire({
          title: 'edicion exitosa',
          icon: 'success'
        })
        
      }
    )
  }
  search(event:any){
    let filter: string = event.target.value
    console.log(event.target.value);
    this.filteredData =this.dataset.filter((user)=>{
      if(user.name.toLowerCase().includes(filter.toLowerCase())){
        return user
      }
        return null
    });
  }

}
