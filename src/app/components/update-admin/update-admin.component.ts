import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { user } from 'src/app/model/User';
import Swal from'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminlistService} from '../../service/adminlist.service';
@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  idParam!: number;
  adminProvider!: user;
  updateProviderAdmin!: user;
  newAdminForm:FormGroup;
  hide = true;
  hideconfirm = true;

  
  constructor(private activatedRoute: ActivatedRoute,
              private adminListService:AdminlistService,
              private fb:FormBuilder,
              private router: Router,) { 
    this.newAdminForm=this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
                
    })            
  }

  async editProvider(){
   
    let newProvider:user={
      name: this.newAdminForm.value.name,
      email: this.adminProvider.email,
      password: this.adminProvider.password,
      status: this.adminProvider.status,
      nickname:this.adminProvider.nickname,
      typeUserId: this.adminProvider.typeUserId,
      createDate: this.adminProvider.createDate,
      updateDate: this.adminProvider.updateDate
    }
    await this.updateProvider(newProvider);

  }

  async ngOnInit(): Promise<void> {
    this.idParam = this.activatedRoute.snapshot.params.id;

    console.log("ID del administrador: ",this.idParam);
    this.adminProvider = await this.getUserById(this.idParam);
    this.newAdminForm.setValue(
      {
        name: this.adminProvider.name,
        email: this.adminProvider.email,
        username: this.adminProvider.nickname,
        password: this.adminProvider.password,
        confirmpassword: this.adminProvider.password
      });
    console.log("Datos del administrador: ",this.newAdminForm.value);

  }

  async getUserById(id:number):Promise<user>{
    let respuesta! : user;
    console.log("PRIMER METODO");
    await this.adminListService.getAdminById(id).toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));
    return respuesta;
  }

  successNotification(mensaje:string){
    Swal.fire({
      title: 'CORRECTO',
      text: mensaje,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.value) {
        console.log('Admin dashboard')
       // this.router.navigateByUrl('');
      }
    })
  } 
    
  wrongNotification(mensaje:string){
    Swal.fire({
      icon: 'error',
      title: 'Error en la modificación de datos',
      text: mensaje,
    })
  }

  async updateProvider(provider:user){
    if(this.newAdminForm.valid){
      let respuesta;
      this.adminListService.updateProvider(this.idParam,provider).toPromise().then(async (response: any) => {
        if(this.newAdminForm.value.password ==  this.newAdminForm.value.confirmpassword) {
          this.successNotification('Se modificaron los datos correctamente');
          respuesta = response;
          console.log("LA RESPUESTA ES:")
          console.log(respuesta)
          console.log("FIN RESPUESTA")
          return respuesta;
        } else {
          this.wrongNotification('Las contraseñas no coinciden, intente de nuevo');  
        }
      }).catch(e => console.error(e));
    } else{
      this.wrongNotification('Complete los espacios vacíos')
    } 
  }
}