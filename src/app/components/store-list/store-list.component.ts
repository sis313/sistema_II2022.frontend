import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { businessbyzone } from 'src/app/model/BusinessByZone';
import { numberstore } from 'src/app/model/StoreList';
import { zonebusiness } from 'src/app/model/ZoneBusiness';
import { StorelistService } from 'src/app/service/storelist.service';
import * as html2pdf from 'html2pdf.js'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  store:numberstore[] = [];
  business:businessbyzone[] = [];
  zonebusiness:zonebusiness[] = [];
  private item:HTMLElement;
  
  constructor(private storelist: StorelistService,private router: Router) { }

  async ngOnInit(): Promise<void> {
   
    this.store= await this.getStoreList();
    this.storetozone();
    this.zonebusiness.forEach(a=>{
      this.listBusinessByZone(a.zone_business);
    });
    console.log(this.zonebusiness[1].listbusiness)
  }
  storetozone(){
      let c:businessbyzone[] = [];
      this.store.forEach(b=>{
        this.zonebusiness.push({name:b.name,zone_business:b.idZone,numberBusiness:b.numberBusiness,listbusiness:c});
          

      })
    
    
  }
  async getStoreList(){

    let respuesta!:numberstore[];
    await this.storelist.getStoreList().toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));

    return respuesta;
    
  }
  
  async getBusinessList(idzone:number){
    let respuesta!:businessbyzone[];
    await this.storelist.getStoreByZone(idzone).toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));

    return respuesta;
    
  }
  
  async listBusinessByZone(idzone:number){
    let businesslist : businessbyzone[]=[];
      businesslist = await this.getBusinessList(idzone);
      const isZone = (element:zonebusiness) => element.zone_business == idzone;
      const i = this.zonebusiness.findIndex(isZone);
      console.log(i)
      this.zonebusiness[i].listbusiness=businesslist;
  }

  async createPdf() {
   
    this.item = document.getElementById('pdf');
    console.log(this.item)
    var opt = {
      margin:       1,
      filename:     'Reporte de Zonas.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    }
    html2pdf().from(this.item).set(opt).save();
    await this.successReport()

  }

  async successReport() {
    Swal.fire({
      icon: 'success',
      title: 'Reporte creado correctamente',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
    }).then(async (result) => {
      if (result.value) {
        console.log('store List');
        await window.location.reload();
      }
    });
  }
}


  