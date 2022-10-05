import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { CalTempService } from 'src/app/Service/calTemp.service';
import { Store } from 'src/app/Model/store.model';
import { StoreService } from 'src/app/Service/store.service';
//imp } from 'src/app/Model/calTemp.model';


@Component({
  selector: 'app-cal-space',
  templateUrl: './cal-space.component.html',
  styleUrls: ['./cal-space.component.css']
})
export class CalSpaceComponent implements OnInit {
  textDescription: string = "";
  constructor(private storeService: StoreService, private router: Router) { }
  data: Store[] =this.storeService.getStoreTemp();
  ngOnInit(): void {
   this.onCharge();
  }

  onCharge(){
    console.log("estamos aca")
    console.log(this.data);
  }
  Calificar(){

  }
  Volver(){
    this.router.navigate(['/main'])

  }
}
