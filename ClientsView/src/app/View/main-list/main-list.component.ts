import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/Service/store.service';
import { error } from '@angular/compiler/src/util';
import { Store } from 'src/app/Model/store.model';
import { Router } from '@angular/router';
import { CalTempService } from 'src/app/Service/calTemp.service';
import { CalTemp } from 'src/app/Model/calTemp.model';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  nombre: string = '';
  cal: CalTemp[] = []
  dataSend: Store[] = [];
  storeD: Store[] = [];
  constructor(private storeC: StoreService, private router: Router,
    private callTempService: CalTempService) {}

  ngOnInit(): void {
    this.onCharge();
  }

  async revisarName() {
    this.storeC
      .getStoreNameHttp(this.nombre)
      .toPromise()
      .then((data) => {
        // console.log(data);
        this.storeD = data;
        this.storeC.setStoreName(this.storeD);
        console.log(this.storeC.getStoreName());
      });
    console.log(this.nombre);
  }

  async onCharge() {
    this.storeC
      .getStoreAll()
      .toPromise()
      .then((data) => {
        console.log(data);
        this.storeD = data;
        this.storeC.setStoreName(this.storeD);
        console.log(this.storeC.getStoreName());
      });
  }

  searchName() {
    console.log('Si da');

    if (this.nombre == '') {
      this.onCharge();
    } else {
      this.revisarName();
    }
  }

  calificar(dataSend: Store){
    console.log(dataSend)
    this.callTempService.setCallTempData(this.dataSend);
    console.log(this.callTempService.getCallTempData());

    this.router.navigate(['/cal']);
  }





}
