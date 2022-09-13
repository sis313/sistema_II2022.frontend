import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { business } from 'src/app/model/Business';
import Swal from'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {BusinesslistService} from '../../service/businesslist.service';
@Component({
  selector: 'app-update-business',
  templateUrl: './update-business.component.html',
  styleUrls: ['./update-business.component.css']
})
export class UpdateBusinessComponent implements OnInit {

  idParam!: number;
  BusinessProvider!: business;
  updateProviderBusiness!: business;
  newBusinessForm:FormGroup;
  hide = true;
  hideconfirm = true;

  
  constructor(private activatedRoute: ActivatedRoute,
              private businessListService:BusinesslistService,
              private fb:FormBuilder,
              private router: Router,) { 
    this.newBusinessForm=this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      typeBusinessId: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
                
    })            
  }

  async editProvider(){
   
    let newProvider:business={
      name: this.newBusinessForm.value.name,
      description: this.BusinessProvider.description,
      typeBusinessId: this.BusinessProvider.typeBusinessId,
      createDate:this.BusinessProvider.createDate,
      updateDate: this.BusinessProvider.updateDate,
      status: this.BusinessProvider.status,
      userId: this.BusinessProvider.userId,
    }
    await this.updateProvider(newProvider);

  }

  async ngOnInit(): Promise<void> {
    this.idParam = this.activatedRoute.snapshot.params.id;

    console.log("ID del negocio: ",this.idParam);
    this.BusinessProvider = await this.getBusinessById(this.idParam);
    this.newBusinessForm.setValue(
      {
        name: this.BusinessProvider.name,
        description: this.BusinessProvider.description,
        typeBusinessId: this.BusinessProvider.typeBusinessId,
        status: this.BusinessProvider.status
      });
    console.log("Datos del administrador: ",this.newBusinessForm.value);

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
        console.log('Business dashboard')
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

  async updateProvider(provider:business){
    if(this.newBusinessForm.valid){
          this.successNotification('Se modificaron los datos correctamente');
    } else{
      this.wrongNotification('Complete los espacios vacíos')
    } 
  }

  keyPressAlphaNumeric(event: { keyCode: any; preventDefault: () => void; }) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}