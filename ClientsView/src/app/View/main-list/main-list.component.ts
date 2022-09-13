import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/Service/store.service';
import { error } from '@angular/compiler/src/util';
import { Store} from 'src/app/Model/store.model';




@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  nombre: string = "";
  storeD: Store [] = [];
  constructor(private storeC: StoreService) {

   }

  ngOnInit(): void {
  }
  async revisarName(){
    this.storeC.getStoreNameHttp(this.nombre).toPromise().then(
      data => {
        //this.storeD.push();
        //this.storeData.setStoreName(this.storeD)
        console.log(data);
    });
    console.log(this.nombre);
  }

}
