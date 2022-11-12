import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/country.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { LegendPosition } from '@swimlane/ngx-charts';
import { OwnerlistService } from 'src/app/service/ownerlist.service';
import { Router } from '@angular/router';
import { user } from 'src/app/model/User';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit   {
  view: [number, number] = [900, 400];
  active: user[] = [];
  ownerList: user[] = [];
  public legendPosition: LegendPosition = LegendPosition.Below;
  // options Pie Chart
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legend: boolean = true;

  // options
  showXAxis = true;
  showYAxis = true;
  gradientBar = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  
 
  
  colorSchemePie: Color = { 
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };

  colorSchemePercent: Color = { 
    domain: ['#2364AA', '#3DA5D9', '#FEC601', '#EA7317'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };

  colorSchemeLinear: Color = { 
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };
  
  colorSchemeLegend: Color = { 
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };

  colorSchemeVerticalBar: Color = { 
    domain: ['#011627', '#2EC4B6', '#E71D36', '#FF9F1C'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };
  
  
  cardColor: string = '#232837';

  async ngOnInit(): Promise<void> {
    this.ownerList = await this.getOwnerData();
  }

  async getOwnerData() {
    let respuesta!: user[];
    await this.ownerlistService
      .getListOwner()
      .toPromise()
      .then((response) => {
        respuesta = response;
        console.log(respuesta);
      })
      .catch((e) => console.error(e));

    return respuesta;
  }
  constructor( private countryService: CountryService,  private ownerlistService: OwnerlistService,
    private router: Router ) {}

  get single() {
    return this.countryService.countryData;
  }

  onRandomData() {
    this.countryService.randomData();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
