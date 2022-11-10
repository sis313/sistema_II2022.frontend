import { Component, OnInit } from '@angular/core';
import { shakespeareData } from './shakespeare';

import {ChartModule} from 'primeng/chart';

import {
  ChartReadyEvent,
  ChartErrorEvent,
  ChartSelectEvent,
  ChartMouseOverEvent,
  ChartMouseOutEvent,
  RegionClickEvent,
  GoogleChartInterface,
  GoogleChartsControlInterface,
  GoogleChartsDashboardInterface,
  GoogleChartEditor,
  GoogleChartWrapper,
  GoogleChartType,
} from 'ng2-google-charts';

declare var $: any;
declare var google: any;

import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventosData: any;
  comprasData: any;
  ticketsData: any;
  cantEventos: any;
  cantClientes: any;
  cantOrganiz: any;
  cantCompras: any;
  cantCalif: any;
  cantComent: any;
  eventosMesData: any;
  eventosMesDataModified: any;
  entradasMesData: any;
  dineroMesData: any;
  dineroMesData2: any;
  dineroMesData3: any;
  dineroMesData4: any;
  dineroMesData5: any;

  ultimoAnnio: any;
  ultimoSemestre: any;
  ultimoTrimestre: any;
  ultimoMes: any;
  ultimoDia: any;

  pieOptions: any;
  barOptions: any;

  //eventosData: any;
  //comprasData: any;
  //ticketsData: any;
  //pieOptions: any;

  databar: any;
datadoughnut: any;
dataline: any;
datapolar: any;
datapie:any;
dataradar:any;
datacombo: any;
chartOptions: any;

  globalFlag=0;

 // dataGlobal1:Array<Array<String>>=[];

 labelGlobal1:any;
  dataGlobal1:any;

  
  constructor(private service: DashboardService,private chartEditor: GoogleChartEditor) { }

  getChartsData() {
 //   this.ticketsService.getVectorEventosGlobal().subscribe((response: any) => {
      this.eventosData = {
        labels: ['Finalizados', 'Cancelados', 'Pendientes', 'En progreso'],
        datasets: [
          {
            label: 'Eventos',
            backgroundColor: [
              '#42A5F5',
              "#FFFC33",
              "#66BB6A",
              "#FFA726"],
            data: [2,2,2,3]
          }
        ]
      };
  //  });
   // this.ticketsService.getVectorComprasGlobal().subscribe((response: any) => {
      this.comprasData = {
        labels: ['Completadas', 'Cancelados'],
        datasets: [
          {
            label: 'Compras',
            backgroundColor: [
              '#FFFC33',
              '#66BB6A'],
            data: [7,4]
          }
        ]
      };
//    });
   // this.ticketsService.getVectorTicketsGlobal().subscribe((response: any) => {
      this.ticketsData = {
        labels: ['Comprados', 'Cancelados'],
        datasets: [
          {
            label: 'Tickets',
            backgroundColor: [
              '#FF5733',
              '#42A5F5'
            ],
            data: [1,5]
          }
        ]
      };
 //   });
  //  this.ticketsService.getEventos().subscribe((response: any) => {
      this.cantEventos = 5;
 //   });
   // this.ticketsService.getClientes().subscribe((response: any) => {
      this.cantClientes = 3;
  //  });
  //  this.ticketsService.getVendedores().subscribe((response: any) => {
      this.cantOrganiz = 6;
   // });
  //  this.ticketsService.getVectorComprasGlobal().subscribe((response: any) => {
      this.cantCompras = (6);
   // });
  //  this.ticketsService.getCalificacionesGlobal().subscribe((response: any) => {
      this.cantCalif = 3;
  //  });
  //  this.ticketsService.getComentariosGlobal().subscribe((response: any) => {
      this.cantComent = 13;
   // });

   this.service.getSemester().subscribe((data:any)=>{
    //console.log(typeof(data))
    //console.log(data)
    let labelsAux = []
    let dataAux = []
    let labelsAux2 = []
    let dataAux2 = []
    let auxDate = new Date()
   let semester = 0
 //  console.log(auxDate)
  // console.log(auxDate.getFullYear())
   if(auxDate.getMonth() < 6){
 //   console.log("1")
    semester = 1
   }else{
   // console.log("2")
    semester = 2
   }
    for(let i = 0; i < data.length; i++) {
      let obj = data[i];
      labelsAux.push(obj.name +", "+ obj.address+" S"+obj.semester+"-"+obj.year)
      dataAux.push(obj.count)
      
      if(obj.semester == semester && obj.year == auxDate.getFullYear() ){
       // console.log("dentro")
        labelsAux2.push(obj.name +", "+ obj.address+" S"+obj.semester+"-"+obj.year)
        dataAux2.push(obj.count)
      }
      //console.log(obj);
  }
  this.dineroMesData5 = {
    labels: labelsAux/*['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']*/,
    //labels: labelsAux,
    datasets: [
      {
        label: 'Visitas semestrales',
        backgroundColor: [
          "#FFFC33",
        ],
        data: dataAux
      }
    ]
  };
  
});

   this.service.getQuarter().subscribe((data:any)=>{
  //  console.log(typeof(data))
    //console.log(data)
    let labelsAux = []
    let dataAux = []
    let labelsAux2 = []
    let dataAux2 = []
    let auxDate = new Date()
   let quarter = 0
  // console.log(auxDate)
  // console.log(auxDate.getFullYear())
   if(auxDate.getMonth() > 8){
 //   console.log("4")
    quarter = 4
   }else{
    if(auxDate.getMonth() > 5){
   //   console.log("3")
      quarter = 3
     }else{
      if(auxDate.getMonth() > 2){
    //    console.log("2")
        quarter = 2
       }else{
     //   console.log("1")
     quarter = 1
       }
     }
   }
    for(let i = 0; i < data.length; i++) {
      let obj = data[i];
      labelsAux.push(obj.name +", "+ obj.address+" Q"+obj.quarter+"-"+obj.year)
      //labelsAux.push(obj.idBusiness +", "+ obj.idBranch+" Q"+obj.quarter+"-"+obj.year)
      dataAux.push(obj.count)
      if(obj.quarter == quarter && obj.year == auxDate.getFullYear() ){
        //console.log("dentro")
        labelsAux2.push(obj.name +", "+ obj.address+" Q"+obj.quarter+"-"+obj.year)
        //labelsAux2.push(obj.idBusiness +", "+ obj.idBranch+" Q"+obj.quarter+"-"+obj.year)
        dataAux2.push(obj.count)
      }
      //console.log(obj);
  }
  this.dineroMesData2 = {
    labels: labelsAux/*['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']*/,
    //labels: labelsAux,
    datasets: [
      {
        label: 'Visitas trimestrales',
        backgroundColor: [
          "#FFFC33",
        ],
        data: dataAux
      }
    ]
  };
});

      this.service.getMonth().subscribe((data:any)=>{
        //console.log(typeof(data))
       // console.log(data)
        let labelsAux = []
        let dataAux = []
        let labelsAux2 = []
        let dataAux2 = []
        let auxDate = new Date()
       let month = auxDate.getMonth()
     //  console.log(auxDate)
    //   console.log(auxDate.getFullYear())
     
        for(let i = 0; i < data.length; i++) {
          let obj = data[i];
 
          labelsAux.push(obj.name +", "+ obj.address+" "+obj.month+"/"+obj.year)
          dataAux.push(obj.count)
          if(obj.month == month && obj.year == auxDate.getFullYear() ){
            //console.log("dentro")
          
     labelsAux2.push(obj.name +", "+ obj.address+" "+obj.month+"/"+obj.year)
            dataAux2.push(obj.count)
          }
          //console.log(obj);
      }
      this.dineroMesData3 = {
        labels: labelsAux/*['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']*/,
        //labels: labelsAux,
        datasets: [
          {
            label: 'Visitas mensuales',
            backgroundColor: [
              "#FFFC33",
            ],
            data: dataAux 
          }
        ]
      };
    });

    this.service.getDay().subscribe((data:any)=>{
    // console.log(typeof(data))
    //  console.log(data)
      let labelsAux = []
      let dataAux = []
      let labelsAux2 = []
        let dataAux2 = []
        
        
       
      for(let i = 0; i < data.length; i++) {
        let obj = data[i];
       
       let auxDat3 = obj.date.slice(0,-19)

       var year = auxDat3.substring(0,4);
var month = (auxDat3.substring(5,7) )// 1 is subtracted since JS has months as 0-11, not as 1-12. Why would anyone design it like this??
var day = auxDat3.substring(8,10)
//console.log(year+"adsd"+month+"adssa"+day)
       /*var myDateArray = auxDat3.split("-");
let auxDate = new Date(myDateArray[0],myDateArray[1]-1,myDateArray[2]); */
let auxDate = new Date()

auxDate.setFullYear(year);
auxDate.setMonth(month);
auxDate.setDate(day);

let hoy=new Date()
//console.log("hoyyyyyyyyyy"+typeof(hoy)+hoy)
    //   console.log("auxdateeeeeeeeee"+typeof(auxDate)+auxDate)
     //  console.log("hoy"+hoy.getDay()+"/"+hoy.getMonth()+"/"+hoy.getFullYear())
      // console.log("auxdate"+auxDate.getDay()+"/"+auxDate.getMonth()+"/"+auxDate.getFullYear())
 
    labelsAux.push(obj.name +", "+ obj.address+" "+auxDate.getDay()+"/"+auxDate.getMonth()+"/"+auxDate.getFullYear())
       dataAux.push(obj.count)
      if(hoy.getMonth() == auxDate.getMonth() && hoy.getFullYear() == auxDate.getFullYear() && auxDate.getDay() == hoy.getDay()){
       //   console.log("dentro")
          labelsAux2.push(obj.name +", "+ obj.address+" "+auxDate.getDay()+"/"+auxDate.getMonth()+"/"+auxDate.getFullYear())
          dataAux2.push(obj.count)
        }
        //console.log(obj);
    }
    this.dineroMesData4 = {
      labels: labelsAux/*['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']*/,
      //labels: labelsAux,
      datasets: [
        {
          label: 'Visitas diarias',
          backgroundColor: [
            "#FFFC33",
          ],
          data: dataAux 
        }
      ]
    };
  });

    this.service.getAnual().subscribe((data:any)=>{
      //console.log(typeof(data))
      //console.log(data)
      let labelsAux = []
      let dataAux = []
     
      for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        labelsAux.push(obj.name +", "+ obj.address + " "+obj.year)
        dataAux.push(obj.count)
        
        //console.log(obj);
    }
    this.dineroMesData = {
      labels: labelsAux/*['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']*/,
      //labels: labelsAux,
      datasets: [
        {
          label: 'Visitas anuales',
          backgroundColor: [
            "#FFFC33",
            
          ],
          data: dataAux 
        }
      ]
    };
  });

      this.service.getGlobal().subscribe((data:any)=>{
        //console.log(typeof(data))
        //console.log(data)
        let labelsAux = []
        let dataAux = []
       
        for(let i = 0; i < data.length; i++) {
          let obj = data[i];
          labelsAux.push(obj.name +", "+ obj.address)
          dataAux.push(obj.count)
          
          //console.log(obj);
      }
      this.eventosMesData = {
        labels: labelsAux, /*['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']*/
        datasets: [
          {
            label: 'Visitas globales',
            backgroundColor: [
              '#42A5F5',
             
              
            ],
            data: dataAux 
          }
        ]
      };
      this.eventosMesDataModified = {
        labels: labelsAux, /*['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']*/
        datasets: [
          {
            label: 'Visitas globales',
            backgroundColor: [
              '#42A5F5',
              "#FFFC33",
              "#66BB6A",
              "#FF6384",
              "#FFCE56",
              "#36A2EB",
              
            ],
            data: dataAux 
          }
        ]
      };
    });



    /*
     "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
                */
   // this.ticketsService.getEntradasPorMes().subscribe((response: any) => {
    this.service.getDashboardRatingsQuantities().subscribe((data:any)=>{
      //console.log("entradas mes: " + response);
     // console.log("primer entradas mes " + response[0]);
    // console.log(data)
      let labelsAux = []
      let dataAux = []
      let dataAux2 = []
      for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        labelsAux.push(obj.name +", "+ obj.address)
        dataAux.push(obj.averageScore)
        dataAux2.push(obj.countIdRating)
        //console.log(obj);
    }
     /* for (let i = response.length-1; i >= 0; i--){
          labelsAux.push(((response[i][1])+1)+"/"+response[i][2])
          dataAux.push(response[i][0])
      }*/
      
      this.entradasMesData = {
        labels: labelsAux,/*labelsAux,*//* ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],*/
        datasets: [
           {
              label: 'Rating promedio',
              backgroundColor: '#42A5F5',
              data: dataAux
          },
          {
            label: 'Ratings',
            backgroundColor: [
              "#66BB6A",
            ],
            data: dataAux2/*[
              1,2,3,4,5,6,7,8,9,10,11,12
              response[0],
              response[1],
              response[2],
              response[3],
              response[4],
              response[5],
              response[6],
              response[7],
              response[8],
              response[9],
              response[10],
              response[11]
            ]*/
          }
        ]
      };
    });

  }

  applyDarkPieTheme() {
    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    };
  }
  applyDarkBarTheme() {
    this.barOptions = {
      plugins: {
        legend: {
          labels: {
           // color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
           // color: '#ebedef'
          },
          grid: {
          //  color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
         //   color: '#ebedef'
          },
          grid: {
        //    color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };
  }
  ngOnInit(): void {
  //this.applyDarkBarTheme()
  /*let obj = '{'
      obj += '"date" : "2022-09-24",'
      obj += '"idBusiness" : 3,'
      obj += '"idBranch" : 3,'
      obj += '"idUser" : 3}' ;
      let string = JSON.stringify(obj);
     // console.log(JSON.parse(string))
 this.service.postAux(JSON.parse(string)).subscribe((response: any)=>{
    console.log(response);
  });*/
      

 
/*

    this.service.getSemester().subscribe((data:any)=>{
      console.log(typeof(data))
      console.log(data)
    })*/



   // this.service.getDashboardRatingsQuantities().subscribe((data:any)=>{
      //console.log(typeof(data))
      //console.log(data)
/*this.labelGlobal1=['Branch', 'Nota promedio']
      this.dataGlobal1=[]*/
      // this.dataGlobal1.push(['Branch', 'Nota promedio'])
     /* for(let i = 0; i < data.length; i++) {
       let obj = data[i];
       this.dataGlobal1.push([obj.idBranch+"", obj.averageScore])*/
       //console.log(obj);
 //  }
   
     // this.dataGlobal1 = data/*JSON.stringify(*/
      /*((JSON.stringify(data)).substring(1, (JSON.stringify(data)).length - 1));
      */
   //   console.log(typeof(this.dataGlobal1))
    //  console.log(this.dataGlobal1)
      
      //this.negocios=data

     /* console.log(typeof([
       ['mes', 'visitas'],
       ['01/22',     6],
       ['02/22',      1],
       ['03/22',  1],
       ['04/22', 1],
       ['05/22',    1]
     ]))*/
 /*   })*/

    this.getChartsData()
    this.eventosData = {
      labels: ['Finalizados', 'Cancelados', 'Pendientes', 'En progreso'],
      datasets: [
        {
          label: 'Eventos',
          backgroundColor: [
            '#42A5F5',
            "#FFFC33",
            "#66BB6A",
            "#FFA726"],
          data: [3,4,5,3]
        }
      ]
    };
    this.comprasData = {
      labels: ['Completadas', 'Canceladas'],
      datasets: [
        {
          label: 'Compras',
          backgroundColor: [
            '#42A5F5',
            "#66BB6A",
          ],
          data: [13,15]
        }
      ]
    };
  
  
    this.ticketsData = {
      labels: ['Comprados', 'Cancelados'],
      datasets: [
        {
          label: 'Tickets',
          backgroundColor: [
            "#FFFC33",
            "#FFA726"],
          data: [12,13]
        }
      ]
    };




    this.databar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#FFA726',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };
 //Doughnut Chart
  this.datadoughnut = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]    
    };
   //Line Chart
    this.dataline = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5'
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726'
          }
      ]
  };
 //Polar Chart
  this.datapolar = {
      datasets: [{
          data: [
              11,
              16,
              7,
              3,
              14
          ],
          backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB"
          ],
          label: 'My dataset'
      }],
      labels: [
          "Red",
          "Green",
          "Yellow",
          "Grey",
          "Blue"
      ]
  };
  //Pie Chart
  this.datapie = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]    
    };
    //Radar Chart
    this.dataradar = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
          }
      ]
  };

  //Combo Chart
  this.datacombo = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: '#42A5F5',
        borderWidth: 2,
        fill: false,
        data: [
            50,
            25,
            12,
            48,
            56,
            76,
            42
        ]
    }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#66BB6A',
        data: [
            21,
            84,
            24,
            75,
            37,
            65,
            34
        ],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#FFA726',
        data: [
            41,
            52,
            24,
            74,
            23,
            21,
            32
        ]
    }]
};
//Chart Option For Combo
this.chartOptions = {
  responsive: true,
  title: {
      display: true,
      text: 'Combo Bar Line Chart'
  },
  tooltips: {
      mode: 'index',
      intersect: true
  }
};

    this.treeMap.dataTable = this.treeMap.dataTable.concat(shakespeareData[this.treeMapAppendCount++]);
    this.globalFlag = 0;

    this.service.getDashboardRatings().subscribe((data:any)=>{
     // console.log(data)
      //this.negocios=data
    })

    this.service.getDashboardBranches().subscribe((data:any)=>{
     // console.log(data)
      //this.negocios=data
    })

    
  }

  name = 'Angular';

  public global(){
    this.globalFlag = 0;
    console.log("global"+this.globalFlag)
    //this.columnChart.redraw();
  }
  public anual(){
    this.globalFlag = 1;
    console.log("semestral"+this.globalFlag)
  }
  public semestral(){
    this.globalFlag = 2;
    console.log("semestral"+this.globalFlag)
  }
  public trimestral(){
    this.globalFlag = 3;
    console.log("trimestral"+this.globalFlag)
  }
  public mensual(){
    this.globalFlag = 4;
    console.log("mensual"+this.globalFlag)
  }
  public diario(){
    this.globalFlag = 5;
    console.log("diario"+this.globalFlag)
  }
  public stateFlag(){
    return this.globalFlag
  }
  public lol(){
    console.log("lol")
  }

  public columnChartDeprecated: GoogleChartInterface = {
    chartType: GoogleChartType.ColumnChart,
    dataTable: /*this.dataGlobal1*/ [
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

  /*redrawChart() {
    let ccComponent = this.columnChart.component;
    //force a redraw
    if(ccComponent!=null){
      console.log("cccompont"+ccComponent)
      ccComponent.draw();
    }
      
  }*/

  public pieChartDeprecated: GoogleChartInterface = {
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

  public pieChart2Deprecated: GoogleChartInterface = {
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

  public pieChart3Deprecated: GoogleChartInterface = {
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

  

  public lineChartDeprecated: GoogleChartInterface = {
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

  public areaChartDeprecated: GoogleChartInterface = {
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

  public selectEvent!: ChartSelectEvent;
  public regionClickEvent!: RegionClickEvent;
  public imageURI = '';

  public slider: GoogleChartsControlInterface = {
    controlType: 'NumberRangeFilter',
    options: {
      filterColumnIndex: 2,
      ui: {
        labelStacking: 'vertical',
        label: 'Age Filter:'
      }
    }
  };

  public categoryPicker: GoogleChartsControlInterface = {
    controlType: 'CategoryFilter',
    options: {
      filterColumnIndex: 1,
      ui: {
        labelStacking: 'vertical',
        label: 'Gender Selection:',
        allowTyping: false,
        allowMultiple: false
      }
    }
  };

  public dashboardPieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    options: {
      width: 250,
      height: 250,
      legend: 'none',
      chartArea: {left: 15, top: 15, right: 0, bottom: 0},
      pieSliceText: 'label'
    },
    view: {columns: [0, 3]}
  };

  public dashboardTable: GoogleChartInterface = {
    chartType: GoogleChartType.Table,
    options: {
      alternatingRowStyle: true,
      showRowNumber : true,
      allowHtml: true,
    },
  };

  public dashboard: GoogleChartsDashboardInterface = {
    dataTable: [
      ['Name', 'Gender', 'Age', 'Donuts eaten'],
      ['Michael' , 'Male', 12, 5],
      ['Elisa', 'Female', 20, 7],
      ['Robert', 'Male', 7, 3],
      ['John', 'Male', 54, 2],
      ['Jessica', 'Female', 22, 6],
      ['Aaron', 'Male', 3, 1],
      ['Margareth', 'Female', 42, 8],
      ['Miranda', 'Female', 33, 6]
    ],
    formatters: [
      {
        columns: [3],
        type: 'ArrowFormat',
        options: {
          base: 5,
        },
      },
    ],
    bind: [
      [
        [this.slider, this.categoryPicker],
        [this.dashboardPieChart, this.dashboardTable]
      ]
    ],
  };

  public columnChart: GoogleChartInterface = {
    chartType: GoogleChartType.ColumnChart,
    dataTable: [
      ['Country', 'Performance', 'Profits'],
      ['Germany', 700, 1200],
      ['USA', 300, 600],
      ['Brazil', 400, 500],
      ['Canada', 500, 1000],
      ['France', 600, 1100],
      ['RU', 800, 1000]
    ],
    options: {
      title: 'Countries',
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      }
    }
  };

  public columnChartWTooltips: GoogleChartInterface =  {
    chartType: GoogleChartType.ColumnChart,
    dataTable: [
      ['Event', 'Highest Recent Viewership', {
        type: 'string',
        label: 'Tooltip Chart',
        role: 'tooltip',
        p: {html: true}
      }],
      ['NBA Finals', 22.4, ''],
      ['NFL Super Bowl', 111.3, ''],
      ['MLB World Series', 19.2, ''],
      ['UEFA Champions League Final', 1.9, ''],
      ['NHL Stanley Cup Finals', 6.4, ''],
      ['Wimbledon Men\'s Championship', 2.4, '']
    ],
    options: {
      title: 'Highest U.S. Viewership for Most Recent Event (in millions)',
      legend: 'none',
      tooltip: {isHtml: true} // This MUST be set to true for your chart to show.
    }
  };

  public tooltipChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Year', 'NBA Finals', 'NFL Super Bowl', 'MLB World Series',
      'UEFA Champions League Final', 'NHL Stanley Cup Finals',
      'Wimbledon Men\'s Championship'],
      ['2005', 12.5, 98.7, 25.3, 0.6, 3.3, 2.8],
      ['2006', 13, 90.7, 17.1, 0.8, 2.8, 3.4],
      ['2007', 9.3, 93, 15.8, 0.9, 1.8, 3.8],
      ['2008', 14.9, 97.5, 17.1, 1.3, 4.4, 5.1],
      ['2009', 14.3, 98.7, 13.6, 2.1, 4.9, 5.7],
      ['2010', 18.2, 106.5, 19.4, 2.2, 5.2, 2.3],
      ['2011', 17.4, 111, 14.3, 4.2, 4.6, 2.7],
      ['2012', 16.8, 111.3, 16.6, 2, 2.9, 3.9],
      ['2013', 16.6, 108.7, 12.7, 1.4, 5.8, 2.5],
      ['2014', 15.7, 111.3, 15, 1.9, 4.7, 2.4]
    ],
    options: {
      title: 'U.S. Viewership Over The Last 10 Years (in millions)',
      legend: 'none',
      width: 200
    }
  };

  public barChart: GoogleChartInterface = {
    chartType: GoogleChartType.BarChart,
    dataTable: [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ],
    options: {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017'
      }
    }
  };

  public stackedColumnChart: GoogleChartInterface = {
    chartType: GoogleChartType.ColumnChart,
    dataTable: [
      ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
       'Western', 'Literature', { role: 'annotation' } ],
      ['2010', 10, 24, 20, 32, 18, 5, ''],
      ['2020', 16, 22, 23, 30, 16, 9, ''],
      ['2030', 28, 19, 29, 30, 12, 13, '']
    ],
    options: {
      width: 600,
      height: 400,
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true
    }
  };

  public vegaChart: GoogleChartInterface = {
    chartType: GoogleChartType.VegaChart,
    dataTable: [],
    options: {
      'vegaLite': {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "Plots two functions using a generated sequence.",
        "width": 300,
        "height": 150,
        "data": {
          "sequence": {
            "start": 0,
            "stop": 12.7,
            "step": 0.1,
            "as": "x"
          }
        },
        "transform": [
          {
            "calculate": "sin(datum.x)",
            "as": "sin(x)"
          },
          {
            "calculate": "cos(datum.x)",
            "as": "cos(x)"
          },
          {
            "fold": ["sin(x)", "cos(x)"]
          }
        ],
        "mark": "line",
        "encoding": {
          "x": {
            "type": "quantitative",
            "field": "x"
          },
          "y": {
            "field": "value",
            "type": "quantitative"
          },
          "color": {
            "field": "key",
            "type": "nominal",
            "title": null
          }
        }
      }
    }
  };

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    options: {
      title: 'Tasks',
      slices: {
        0: {offset: 0.3},
        1: {offset: 0.2}
      }
    }
  };

  public gaugeChart: GoogleChartInterface = {
    chartType: GoogleChartType.Gauge,
    dataTable: [
      ['Label', 'Value'],
      ['Value', 1.78]
    ],
    options: {
      animation: {easing: 'out'},
      width: 150, height: 150,
      greenFrom: 1, greenTo: 4,
      minorTicks: 5,
      min: 0, max: 5,
      majorTicks: ['0', '1', '2', '3', '4', '5'],
      greenColor: '#d0e9c6'
    }
  };

  public scatterChart: GoogleChartInterface = {
    chartType: GoogleChartType.ScatterChart,
    dataTable: [
      ['Age', 'Weight'],
      [ 8,      12],
      [ 4,      5.5],
      [ 11,     14],
      [ 4,      5],
      [ 3,      3.5],
      [ 6.5,    7]
    ],
    options: {
      title: 'Age vs. Weight comparison',
      hAxis: {title: 'Age', minValue: 0, maxValue: 15},
      vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
      legend: 'none'
    }
  };

 public timelineChart: GoogleChartInterface = {
    chartType: GoogleChartType.Timeline,
    dataTable: [
      ['Name', 'From', 'To'],
      [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ]
 };

 public lineChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ],
    options: {title: 'Company Performance'}
  };

 public comboChart: GoogleChartInterface = {
    chartType: GoogleChartType.ComboChart,
    dataTable: [
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05',  165,      938,         522,             998,           450,      614.6],
      ['2005/06',  135,      1120,        599,             1268,          288,      682],
      ['2006/07',  157,      1167,        587,             807,           397,      623],
      ['2007/08',  139,      1110,        615,             968,           215,      609.4],
      ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ],
    options: {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    }
  };

  public tableChart: GoogleChartInterface = {
    chartType: GoogleChartType.Table,
    dataTable: [
      ['Department', 'Revenues', 'Another column', 'ColorFormat'],
      ['Shoes', 10700, -100, 100],
      ['Sports', -15400, 25, 500],
      ['Toys', 12500, 40, 800],
      ['Electronics', -2100, 889, 1000],
      ['Food', 22600, 78, 1100],
      ['Art', 1100, 42, 400]
    ],
    formatters: [
      {
        columns: [1, 2],
        type: 'NumberFormat',
        options: {
          prefix: '&euro;', negativeColor: 'red', negativeParens: true
        }
      },
      {
        columns: [3],
        type: 'ColorFormat',
        options: {
          ranges: [
            {from: 100, to: 900, fromBgColor: 'green', toBgColor: 'yellow'}
          ]
        }
      },
      {
        columns: [2],
        type: 'ArrowFormat',
        options: {
          base: 60,
        },
      }
    ],
    options: {allowHtml: true},
  };

  public tableWithPatternFormat: GoogleChartInterface = {
    chartType: GoogleChartType.Table,
    dataTable: [
      ['Name', 'Email', 'Result'],
      ['John Lennon', 'john@beatles.co.uk', ''],
      ['Paul McCartney', 'paul@beatles.co.uk', ''],
      ['George Harrison', 'george@beatles.co.uk', ''],
      ['Ringo Starr', 'ringo@beatles.co.uk', '']
    ],
    formatters: [
      {
        columns: [0, 1],
        type: 'PatternFormat',
        options: {
          pattern: '<a href="mailto:{1}">{0}</a>',
          dstColumnIndex: 2,
        }
      },
    ],
    options: {
      allowHtml: true, showRowNumber: true
    }
  };

  public tableWithDates: GoogleChartInterface = {
    chartType: GoogleChartType.Table,
    dataTable: [
      ['Employee Name', 'Start Date (Long)', 'Start Date (Medium)', 'Start Date (Short)'],
      ['Mike', new Date(2008, 1, 28, 0, 31, 26),
               new Date(2008, 1, 28, 0, 31, 26),
               new Date(2008, 1, 28, 0, 31, 26)],
      ['Bob', new Date(2007, 5, 1, 0),
              new Date(2007, 5, 1, 0),
              new Date(2007, 5, 1, 0)],
      ['Alice', new Date(2006, 7, 16),
                new Date(2006, 7, 16),
                new Date(2006, 7, 16)]
    ],
    formatters: [
      {
        columns: [1],
        type: 'DateFormat',
        options: {
          formatType: 'long',
        },
      },
      {
        columns: [2],
        type: 'DateFormat',
        options: {
          formatType: 'medium',
        },
      },
      {
        columns: [3],
        type: 'DateFormat',
        options: {
          formatType: 'short',
        },
      },
    ],
  };

  public remoteSourceData: GoogleChartInterface = {
    dataSourceUrl: 'https://spreadsheets.google.com/a/google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1',
    query: 'SELECT A,D WHERE D > 100 ORDER BY D',
    // refreshInterval: 5,
    queryCallback: (queryResponse) => {
      console.log('has errors: ' + queryResponse.isError());
    },
    chartType: GoogleChartType.Table,
    options: {
      alternatingRowStyle: true,
      showRowNumber : true,
      allowHtml: true,
    },
    formatters: [
      {
        columns: [1],
        type: 'ColorFormat',
        options: {
          ranges: [
            {from: 0, to: 1100, fromBgColor: 'green', toBgColor: 'red'}
          ]
        }
      },
    ],
  };

 public geoChart: GoogleChartInterface = {
    chartType: GoogleChartType.GeoChart,
    dataTable: [
      ['Country', 'Population (2019)'],
      ['Austria', 8858775],
      ['Belgium', 11467923],
      ['Bulgaria', 7000039],
      ['Croatia', 4076246],
      ['Cyprus',  875898],
      ['Czech Republic', 10649800],
      ['Denmark', 5806081],
      ['Estonia', 1324820],
      ['Finland', 5517919],
      ['France',  67028048],
      ['Germany', 83019214],
      ['Greece',  10722287],
      ['Hungary', 9797561],
      ['Ireland', 4904226],
      ['Italy', 60359546],
      ['Latvia', 1919968],
      ['Lithuania', 2794184],
      ['Luxembourg', 613894],
      ['Malta', 493559],
      ['Netherlands', 17282163],
      ['Poland', 37972812],
      ['Portugal', 10276617],
      ['Romania', 19401658],
      ['Slovakia', 5450421],
      ['Slovenia', 2080908],
      ['Spain', 46934632],
      ['Sweden', 10230185],
    ],
    options: {
      region: '150', // Europe
      colorAxis: {colors: ['#ffc107', '#fd7e14', '#dc3545']},
      backgroundColor: '#9cf',
      datalessRegionColor: '#f8f9fa',
      defaultColor: '#6c757d',
    }
  };

  public orgChart: GoogleChartInterface = {
    chartType: GoogleChartType.OrgChart,
    dataTable: [
      ['Name',   'Manager', 'Tooltip'],
      [{v: 'Mike', f: 'Mike<div style="color:red; font-style:italic">President</div>'}, '', 'The President'],
      [{v: 'Jim', f: 'Jim<div style="color:red; font-style:italic">Vice President</div>'}, 'Mike', 'VP'],
      ['Alice', 'Mike', ''],
      ['Bob', 'Jim', 'Bob Sponge'],
      ['Carol', 'Bob', '']
    ],
    options: {
      allowHtml: true,
      allowCollapse: true
    }
  };

  public candlestickChart: GoogleChartInterface = {
    chartType: GoogleChartType.CandlestickChart,
    dataTable: [
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
    ],
    firstRowIsData: true,
    options: {
      legend: 'none',
      bar: { groupWidth: '100%' }, // Remove space between bars.
      candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
    }
  };

  public treeMap: GoogleChartInterface = {
    chartType: GoogleChartType.TreeMap,
    dataTable: [
      ['ID', 'Parent', 'Number of Lines'],
      ['Shakespeare', null, 0],

      ['Comedies', 'Shakespeare', null],
      ['Tragedies', 'Shakespeare', null],
      ['Histories', 'Shakespeare', null]
    ],
    options: {
      highlightOnMouseOver: true,
      maxDepth: 1,
      maxPostDepth: 2,
      minHighlightColor: '#8c6bb1',
      midHighlightColor: '#9ebcda',
      maxHighlightColor: '#edf8fb',
      minColor: '#009688',
      midColor: '#f7f7f7',
      maxColor: '#ee8100',
      headerHeight: 15,
      showScale: true,
      height: 200,
      useWeightedAverageForAggregation: true
    }
  };

  public annotationChart: GoogleChartInterface = {
    chartType: GoogleChartType.AnnotationChart,
    dataTable: [
      ['Date', 'Kepler-22b mission', 'Kepler title', 'Kepler text', 'Gliese 163 mission', 'Gliese title',
        'Gliese text'],
      [new Date(2314, 2, 15), 12400, undefined, undefined, 10645, undefined, undefined],
      [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter', 12374, undefined, undefined],
      [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall', 15766, 'Gallantors', 'First Encounter'],
      [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!', 34334, 'Gallantors',
        'Statement of shared principles'],
      [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties', 66467, 'Gallantors', 'Mysteries revealed'],
      [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost', 79463, 'Gallantors', 'Omniscience achieved']
    ],
    options: {
      displayAnnotations: true
    }
  };

  private orgChartCollapsed = false;
  private treeMapAppendCount = 0;



  public changeData(): void {
    const dataTable = this.columnChart.dataTable;
    for (let i = 1; i < 7; i++) {
      dataTable[i][1] = Math.round(Math.random() * 1000);
      dataTable[i][2] = Math.round(Math.random() * 1000);
    }
    this.columnChart.component!.draw();
  }

  public setupTooltips() {
    const data = this.tooltipChart.component!.wrapper.getDataTable();
    const view = new google.visualization.DataView(data);
    for (let i = 0; i < this.columnChartWTooltips.dataTable.length - 1; i++) {
      // Set the view for each event's data
      view.setColumns([0, i + 1]);

      const tooltipChart = this.tooltipChart.component!.wrapper.getChart();

      const el = google.visualization.events.addListener(tooltipChart, 'ready', () => {

        // Get the PNG of the chart and set is as the src of an img tag.
        const tooltipImg = '<img src="' + tooltipChart.getImageURI() + '">';

        // Add the new tooltip image to your data rows.
        this.columnChartWTooltips.dataTable[i + 1][2] = tooltipImg;

        google.visualization.events.removeListener(el);
      });

      tooltipChart.draw(view, {
        title: 'U.S. Viewership Over The Last 10 Years (in millions)',
        legend: 'none'
      });
    }
    this.columnChartWTooltips.component!.draw();
  }

  public openAsPNG() {
    this.imageURI = this.columnChart.component!.wrapper.getChart().getImageURI();
    $('#pngModal').modal('show');
  }

  public editChart(chart: GoogleChartInterface) {
    this.chartEditor.openDialog(chart)
                    .then((wrapper: GoogleChartWrapper) => {
                      console.log('dialog OK');
                      console.log('new chart type: ', wrapper.getChartType());
                    })
                    .catch(() => console.log('dialog cancelled'));
  }

  public changeChartType() {
    if (this.columnChart.chartType === 'ColumnChart') {
      this.columnChart.chartType = 'LineChart';
    } else {
      this.columnChart.chartType = 'ColumnChart';
    }
    this.columnChart.component!.draw();
  }

  public ready(event: ChartReadyEvent) {
    console.log(event.message);
  }

  public error(event: ChartErrorEvent) {
    console.error('Error: ' + event);
  }

  public select(event: ChartSelectEvent) {
    this.selectEvent = event;
  }

  public mouseOver(event: ChartMouseOverEvent) {
    console.log('ChartMouseOverEvent');
    console.log('bb: ' + JSON.stringify(event.boundingBox));
    console.log('pos: ' + JSON.stringify(event.position));
    console.log('type: ' + JSON.stringify(event.columnType));
    console.log('label: ' + JSON.stringify(event.columnLabel));
    console.log('value: ' + JSON.stringify(event.value));
  }

  public mouseOut(event: ChartMouseOutEvent) {
    console.log('ChartMouseOutEvent');
    console.log('bb: ' + JSON.stringify(event.boundingBox));
    console.log('pos: ' + JSON.stringify(event.position));
    console.log('type: ' + JSON.stringify(event.columnType));
    console.log('label: ' + JSON.stringify(event.columnLabel));
    console.log('value: ' + JSON.stringify(event.value));
  }

  public collapseOrgChart() {
    this.orgChartCollapsed = !this.orgChartCollapsed;
    const orgChartWrapper = this.orgChart.component!.wrapper;
    orgChartWrapper.getChart().collapse(0, this.orgChartCollapsed);
  }

  public appendDataToTreeMap() {
    if (this.treeMapAppendCount >= shakespeareData.length) {
      return;
    }
    this.treeMap.dataTable = this.treeMap.dataTable.concat(shakespeareData[this.treeMapAppendCount++]);
    this.treeMap.component!.draw();
  }

  public geoChartRegionClick(event: RegionClickEvent) {
    this.regionClickEvent = event;
  }

  public clearTimelineSelection() {
    this.timelineChart.component!.wrapper.getChart().setSelection([]);
  }

  public toggleRowNumbers() {
    this.dashboardTable.options.showRowNumber = !this.dashboardTable.options.showRowNumber;
    this.dashboard.component!.draw();
  }
}


