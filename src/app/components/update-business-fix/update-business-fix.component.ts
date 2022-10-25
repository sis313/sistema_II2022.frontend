import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import Swal from'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import { business } from 'src/app/model/Business';
import { BusinesslistService } from 'src/app/service/businesslist.service';

@Component({
  selector: 'app-update-business-fix',
  templateUrl: './update-business-fix.component.html',
  styleUrls: ['./update-business-fix.component.css']
})
export class UpdateBusinessFixComponent implements OnInit {

  idParam!: number;
  adminBusiness!: business;
  updateBusinessAdmin!: business;
  newAdminForm:FormGroup;
  hide = true;
  hideconfirm = true;

  constructor(private activatedRoute: ActivatedRoute,
    private businessListService:BusinesslistService,
    private fb:FormBuilder,
    private router: Router,) { 
      this.newAdminForm=this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
            
    })            
  }

  async editBusiness(){

    let newBusiness:business={
      name: this.newAdminForm.value.name,
      description: this.newAdminForm.value.description,
      status: this.adminBusiness.status,
      typeBusinessId:this.adminBusiness.typeBusinessId,
      createDate: this.adminBusiness.createDate,
      updateDate: this.adminBusiness.updateDate,
      userId: this.adminBusiness.userId
    }
    await this.updateBusiness(newBusiness);

  }

  async ngOnInit(): Promise<void> {
    this.idParam = this.activatedRoute.snapshot.params.id;

    console.log("ID del negocio: ",this.idParam);
    this.adminBusiness = await this.getBusinessById(this.idParam);
    this.newAdminForm.setValue(
    {
      name: this.adminBusiness.name,
      description: this.adminBusiness.description
    });
    console.log("Datos del negocio: ",this.newAdminForm.value);

  }

  async getBusinessById(id:number):Promise<business>{
      let respuesta! : business;
      console.log("PRIMER METODO");
      await this.businessListService.getBusinessById(id).toPromise().then((response) => {
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
        this.router.navigateByUrl('/business');
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

  async updateBusiness(Business:business){
    if(this.newAdminForm.valid){
      let respuesta;
      this.businessListService.updateBusiness(this.idParam,Business).toPromise().then(async (response: any) => {

      this.successNotification('Se modificaron los datos correctamente');
      respuesta = response;
      console.log("LA RESPUESTA ES:")
      console.log(respuesta)
      console.log("FIN RESPUESTA")
      return respuesta;

    }).catch(e => console.error(e));
    } else{
      this.wrongNotification('Complete los espacios vacíos')
    } 
  }

  keyPressAlphaNumeric(event: { keyCode: any; preventDefault: () => void; }) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-z A-Z]/.test(inp)) {
    return true;
    } else {
    event.preventDefault();
    return false;
    }
  }
}
