import { Component, OnInit } from '@angular/core';
import { BusinesslistService } from 'src/app/service/businesslist.service';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit   {
  view: [number, number] = [900, 400];
  branches: any = [];
  private dato: number;
  private datos = [];
  private nombreCategoria = [];
  private branch;
  chart: any = [];


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Cantidad de sucursales'];
  public barChartType: ChartType = 'pie';

  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[];
  public chartColors;

  public barChartLabelsBar: Label[] = ['Cantidad de sucursales'];
  public barChartTypeBar: ChartType = 'bar';
  
 
  private colores = ['#177E89', '#084C61', '#DB3A34', '#FFC857', '#323031'];

  async ngOnInit(): Promise<void> {
    this.getBranchesCount();
    
  }

  
  constructor( private businessListService: BusinesslistService) {
    this.getBranch();
  }
  
  getBranchesCount() {
    this.businessListService.getActiveBranchCount().subscribe(res => {
      this.branches = res;
      console.log(res);
      for (const cate of this.branches) {
        this.dato = cate.activeBranchCount.toString().split(',');
        this.datos.push(this.dato);
        this.nombreCategoria.push(cate.name);
        console.log(res);
        console.log(this.dato);
      }
    });
  }

  getBranch() {
    this.businessListService.getActiveBranchCount().subscribe(res => {
      this.branch = res;
      for (const cate of this.branch) {
        this.dato = cate.activeBranchCount.toString().split(',');
        this.datos.push(this.dato);
        this.nombreCategoria.push(cate.name);
       
        console.log(res);
        console.log(this.dato);
      }
     
      this.cargarDatos(this.datos, this.nombreCategoria, this.colores);
    });
  }

  cargarDatos(datos, nombreCategoria, colores) {
    this.barChartData = [];
    this.chartColors = [];

    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: nombreCategoria[index] });
      this.chartColors.push({backgroundColor: colores[index]});
    }

  }
  


}
