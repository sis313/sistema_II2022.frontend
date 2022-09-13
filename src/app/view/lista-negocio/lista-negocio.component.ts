import { Component, OnInit } from '@angular/core';
import { ListaNegocioService } from 'src/app/service/lista-negocio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-negocio',
  templateUrl: './lista-negocio.component.html',
  styleUrls: ['./lista-negocio.component.css']
})
export class ListaNegocioComponent implements OnInit {

  negocios = [
    { idBusiness:0,name:'nombre',description:'description',idTypeBusiness:0,status:0,userIdUser:0 },
];

  constructor(private service: ListaNegocioService) { 
    this.service.getNegocios().subscribe((data:any)=>{
      console.log(data)
      this.negocios=data
    })
  }

  ngOnInit(): void {
  }

  eliminarNegocio(idBusiness: any, name: any) {
    if(confirm("Are you sure to delete "+idBusiness+name)) {
      console.log(typeof(idBusiness+""))
      this.service.deleteNegocio(idBusiness+"").subscribe((response: any)=>{
        if(response.length==0){
          console.log("sin respuesta")
        }else{
          console.log(response);
        }
        /*console.log("antes")
        this.router.navigate([this.router.url]);
        console.log("despues")*/
      });

     /* this.service.getNegocios().subscribe((data:any)=>{
        console.log(data)
        this.negocios=data
       
      })*/



    }
  }
}
