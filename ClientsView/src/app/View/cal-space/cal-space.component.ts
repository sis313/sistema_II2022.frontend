import { Component, OnInit, Input } from '@angular/core';
import { CalTempService } from 'src/app/Service/calTemp.service';
import { Store } from 'src/app/Model/store.model';
//imp } from 'src/app/Model/calTemp.model';


@Component({
  selector: 'app-cal-space',
  templateUrl: './cal-space.component.html',
  styleUrls: ['./cal-space.component.css']
})
export class CalSpaceComponent implements OnInit {

  constructor(private calTempS: CalTempService) { }
  data: Store[] =this.calTempS.getCallTempData();
  ngOnInit(): void {
   this.onCharge();
  }

  onCharge(){
    console.log("estamos aca")
    console.log(this.data);
  }
}
