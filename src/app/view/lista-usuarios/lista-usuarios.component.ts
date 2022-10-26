import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserModel } from 'src/app/model/registro';
import { UsersService } from 'src/app/service/users.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ListaUsuariosComponent implements OnInit {
  pages: number = 1;
  dataset: UserModel[];
  filteredData : UserModel[];
  user:UserModel;
  roles:string;
  rol:string;

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
        this.dataset.forEach(function (element){
          if(element.roles[0].name == "OWNER"){
            element.roles[0].name = "Dueño de negocio";
          }
          else if(element.roles[0].name == "USER"){
            element.roles[0].name = "Cliente";
          }
          else if(element.roles[0].name == "ADMIN"){
            element.roles[0].name = "Administrador";
          }
        });
        console.log( typeof data[0].roles );
        console.log( this.dataset)
    })
  }

  setUser(user:UserModel){
    console.log(user);
    this.user= user;
    console.log("DFF"+user.roles[0].name);
    this.roles = user.roles[0].name;
    // if(user.roles[0].name == "Dueño de negocio")
    // {
    //   this.roles = "OWNER";
    // }
    // else if(user.roles[0].name == "Cliente")
    // {
    //   this.roles = "USER";
    // }
    // else if(user.roles[0].name == "Administrador")
    // {
    //   this.roles = "ADMIN";
    // }

  }
  saveUser(){
    if(this.roles == "Dueño de negocio")
    {
      this.rol = "OWNER";
    }
    else if(this.roles== "Cliente")
    {
      this.rol = "USER";
    }
    else if(this.roles == "Administrador")
    {
      this.rol = "ADMIN";
    }
    this.user.roles = [{
      name: this.rol
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
    this.getUsers();
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
