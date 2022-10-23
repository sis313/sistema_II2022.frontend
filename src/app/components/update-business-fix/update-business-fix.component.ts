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
  adminProvider!: business;
  updateProviderAdmin!: business;
  newAdminForm:FormGroup;
  hide = true;
  hideconfirm = true;



  constructor(private activatedRoute: ActivatedRoute,
    private adminListService:BusinesslistService,
    private fb:FormBuilder,
    private router: Router,) { 
this.newAdminForm=this.fb.group({
name: new FormControl('', Validators.required),
description: new FormControl('', Validators.required)
      
})            
}

async editProvider(){

let newProvider:business={
name: this.newAdminForm.value.name,
description: this.newAdminForm.value.description,
status: this.adminProvider.status,
typeBusinessId:this.adminProvider.typeBusinessId,
createDate: this.adminProvider.createDate,
updateDate: this.adminProvider.updateDate,
userId: this.adminProvider.userId
}
await this.updateProvider(newProvider);

}

async ngOnInit(): Promise<void> {
this.idParam = this.activatedRoute.snapshot.params.id;

console.log("ID del negocio: ",this.idParam);
this.adminProvider = await this.getBusinessById(this.idParam);
this.newAdminForm.setValue(
{
name: this.adminProvider.name,
description: this.adminProvider.description,

});
console.log("Datos del negocio: ",this.newAdminForm.value);

}

async getBusinessById(id:number):Promise<business>{
let respuesta! : business;
console.log("PRIMER METODO");
await this.adminListService.getBusinessById(id).toPromise().then((response) => {
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

async updateProvider(provider:business){
if(this.newAdminForm.valid){
let respuesta;
this.adminListService.updateBusiness(this.idParam,provider).toPromise().then(async (response: any) => {
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
