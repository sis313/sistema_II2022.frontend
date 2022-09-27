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

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular';

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     6],
      ['Lunch',      1],
      ['Stand-Up',  1],
      ['Shore-end', 1],
      ['Fun',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public columnChart: GoogleChartInterface = {
    chartType: GoogleChartType.ColumnChart,
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     6],
      ['Lunch',      1],
      ['Stand-Up',  1],
      ['Shore-end', 1],
      ['Fun',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public lineChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     6],
      ['Lunch',      1],
      ['Stand-Up',  1],
      ['Shore-end', 1],
      ['Fun',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public areaChart: GoogleChartInterface = {
    chartType: GoogleChartType.AreaChart,
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     6],
      ['Lunch',      1],
      ['Stand-Up',  1],
      ['Shore-end', 1],
      ['Fun',    1]
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };
  
}
