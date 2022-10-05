import { Component, OnInit } from '@angular/core';
import {
  GoogleChartInterface, GoogleChartType
} from 'ng2-google-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  globalFlag=0;

  constructor() { }

  ngOnInit(): void {
    this.globalFlag = 0;
  }

  name = 'Angular';

  public global(){
    this.globalFlag = 0;
    console.log("global"+this.globalFlag)
  }
  public semestral(){
    this.globalFlag = 1;
    console.log("semestral"+this.globalFlag)
  }
  public trimestral(){
    this.globalFlag = 2;
    console.log("trimestral"+this.globalFlag)
  }
  public mensual(){
    this.globalFlag = 3;
    console.log("mensual"+this.globalFlag)
  }
  public diario(){
    this.globalFlag = 4;
    console.log("diario"+this.globalFlag)
  }
  public stateFlag(){
    return this.globalFlag
  }
  public lol(){
    console.log("lol")
  }


  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['sucursal', 'visitas'],
      ['1',     6],
      ['2',      5],
      ['3',  3],
      ['4', 4],
      ['5',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public pieChart2: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['edad', 'visitas'],
      ['18-24',     3],
      ['25-32',      3],
      ['33-40',  1],
      ['41-50', 1],
      ['51-60',    1],
      ['61 o mas',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public pieChart3: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['sexo', 'visitas'],
      ['hombres',     3],
      ['mujeres',    7]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public columnChart: GoogleChartInterface = {
    chartType: GoogleChartType.ColumnChart,
    dataTable: [
      ['mes', 'visitas'],
      ['01/22',     6],
      ['02/22',      1],
      ['03/22',  1],
      ['04/22', 1],
      ['05/22',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public lineChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['mes', 'visitas'],
      ['01/22',     6],
      ['02/22',      1],
      ['03/22',  1],
      ['04/22', 1],
      ['05/22',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public areaChart: GoogleChartInterface = {
    chartType: GoogleChartType.AreaChart,
    dataTable: [
      ['mes', 'visitas'],
      ['01/22',     6],
      ['02/22',      1],
      ['03/22',  1],
      ['04/22', 1],
      ['05/22',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

}
