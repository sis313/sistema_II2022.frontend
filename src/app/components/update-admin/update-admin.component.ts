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
    //await this.updateProvider(newProvider);

  }

  async ngOnInit(): Promise<void> {
    this.idParam = this.activatedRoute.snapshot.params.id;

    console.log("ID del administrador: ",this.idParam);
    this.adminProvider = await this.getUserById(this.idParam);
    console.log(this.adminProvider);

  }

  async getUserById(id:number):Promise<user>{
    let respuesta! : user;
    console.log("PRIMER METODO");
    await this.adminListService.getAdminById(id).toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));
    return respuesta;
  }
}