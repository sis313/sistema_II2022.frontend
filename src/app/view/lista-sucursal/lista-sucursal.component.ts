import { Component, OnInit } from '@angular/core';
import { ListaSucursalService } from 'src/app/service/lista-sucursal.service';

@Component({
  selector: 'app-lista-sucursal',
  templateUrl: './lista-sucursal.component.html',
  styleUrls: ['./lista-sucursal.component.css']
})
export class ListaSucursalComponent implements OnInit {

  sucursales = [
    {attentionDays: 'Monday',closeHour: '06:01:01',createDate: '2021-12-31',direction: 'branch direction',idBranch: 4,idBusiness: 104,
    /*idLocation: 4,idZone: 4,image: "aW1hZ2UgZmlsZQ==",*/openHour: '06:01:01',status: 1,updateDate: '2021-12-31'},
];

comentarios = [
  { nombre: 'carlos', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'ronaldo', comentario: 'bien',fecha: '23/04/12' },
  { nombre: 'victor', comentario: 'bien',fecha: '23/04/12' },

];

constructor(private service: ListaSucursalService) { 
  this.service.getSucursales().subscribe((data:any)=>{
    //console.warn(data)
    console.log(data)
    this.sucursales=data
  })
}
  ngOnInit(): void {
  }

  eliminarSucursal(idBranch: any/*, name: any*/) {
    if(confirm("Are you sure to delete "+idBranch+/*name*/"nombre")) {
      console.log(typeof(idBranch+""))
      this.service.deleteSucursal(idBranch+"").subscribe((response: any)=>{
          console.log(response);
          console.log("fin")
          this.ngOnInit();
        
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
