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
  percentTotal = [];
  percent:number;
  suma=0;

/*BAR CHART*/
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{ticks: {
      min: 0,
      max: 20,
    },}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Cantidad de sucursales'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[];


/*PIE CHART*/  
public pieChartOptions: ChartOptions = {
  responsive: true,
  scales: { xAxes: [{}], yAxes: [{ticks: {
    min: 0,
    max: 20,
  },}] }
 
};
public pieChartLabels: Label[] = ['Cantidad de sucursales'];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartData: ChartDataSets[];


/*BUBBLE CHART*/

  public chartColors;
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
        this.suma=this.suma+cate.activeBranchCount;
        console.log("Suma: "+this.suma )
       
      }
      console.log("Suma total: "+this.suma)
      for (const cate of this.branches) {
        this.dato = cate.activeBranchCount.toString().split(',');
        this.datos.push(this.dato);
        this.percent=(cate.activeBranchCount/this.suma)*100;

        this.percentTotal.push(this.percent.toFixed(2));
        console.log(this.percentTotal);
       
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
    this.pieChartData = [];
    this.chartColors = [];
    

    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: nombreCategoria[index] });
      this.pieChartData.push({ data: datos[index], label: nombreCategoria[index] });
      this.chartColors.push({backgroundColor: colores[index]});
    }

  }
  


}
