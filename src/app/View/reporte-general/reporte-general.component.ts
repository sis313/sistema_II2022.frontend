import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl'
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/Service/hospital.service';
import { CityService } from 'src/app/Service/city.service';
import { Hospital } from 'src/app/Models/Hospital';
import { City } from 'src/app/Models/City';
import { Country } from 'src/app/Models/Country';
import { CountryService } from 'src/app/Service/country.service';
import { Producto } from 'src/app/Models/producto';

import { Area } from 'src/app/Models/area';
import { TipoProducto } from 'src/app/Models/tipoProducto';

import { DomSanitizer } from '@angular/platform-browser';
import { Imagen } from 'src/app//Models/imagen';
@Component({
  selector: 'app-reporte-general',
  templateUrl: './reporte-general.component.html',
  styleUrls: ['./reporte-general.component.css']
})
export class ReporteGeneralComponent implements OnInit {
  lat:number=0;
  lon:number=0;
  hosp:Array<Hospital>=[];
  city:Array<City>=[];
  country:Array<Country>=[];
  map!: mapboxgl.Map;
  dat:any;
  currentMarkers:any[]=[];
  
  public archivos:any=[];
  SelectFiles?:FileList;
  progressInfo =[];
  message ="";
  filename="";

 
  prev:string="";
  nombreimagen ='default.jpg';
  nombre :string="";
  precio: number=0;
  area :Area[] = [];
  tipoproducto :TipoProducto[] = [];
  areaid = 1;
  tipoproductoid = 1;
  nombreArea='';
  
  caracteristica='';
  cantidad = null;
  medida = '';
 
  constructor(private sanitizer:DomSanitizer,private countries:CountryService ,private hos: HospitalService,private cities:CityService, private router: Router) { }
 
  ngOnInit(): void {
    this.contries_data();
    
    (mapboxgl as any).accessToken =environment.mapboxkey;
  
    this.map= new mapboxgl.Map({
    container: 'mapa-mapbox', // container ID
    //style: 'mapbox://styles/porceljhoan/ckund5chf15l117pkjr30so2i', // style URL
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-50.6462411, -21.7835007], // starting position
    zoom: 2.8 ,// starting zoom
    minZoom:2.8,
    
    });
    
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.doubleClickZoom.disable();

    this.map.on('click', (e) => {
      console.log(e);
      // {
      //     lngLat: {
      //         lng: 40.203,
      //         lat: -74.451
      //     },
      //     originalEvent: {...},
      //     point: {
      //         x: 266,
      //         y: 464
      //     },
      //      target: {...},
      //      type: "click"
      // }
      });
    // this.map.boxZoom.disable();
    // this.map.dragPan.disable();
    //this.map.keyboard.disable();
    //this.map.scrollZoom.disable();
    // this.map.touchZoomRotate.disable();
  }

  

  
  marcadores(){
   this.delete_marker(); 
  console.log("cantidad"+this.hosp.length)
  for(let i=0;i<this.hosp.length ;i++){
  
    
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML (
      `<div class:"mapboxgl-popup-content" style="color:black;margin:0,padding:0, font: 200 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif"><h2>Ciudad : ${this.hosp[i].nameCity}<br> latitud-longitud : ${this.hosp[i].latitude};<br>  ${this.hosp[i].longitude}</h2></div>`
      );

    const marker2 = new mapboxgl.Marker({ color: 'yellow', rotation: 25 })
    .setLngLat([this.hosp[i].longitude,this.hosp[i].latitude])
    .setPopup(popup)
    
    .addTo(this.map);

    
  }


  }
  hospitales(){
    this.hos.all().subscribe(
      data => {
        this.hosp = data;
       this.marcadores();
      // this.clusters();
        console.log(this.hosp);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  ciudades(){

    this.cities.all().subscribe(
      data => {
        this.city = data;
       //this.marcadores()
       this.ciudades_Geojson();
        console.log(this.city);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  ciudades_Geojson(){
    this.dat=JSON.parse(JSON.stringify({
      "type": "FeatureCollection",
      features: [
        {
          "type": "Feature",
          "properties": {"message": "Null Island",'iconSize': [25, 25],"confirmed":"","deaths":"","recovered":""},
          "geometry": {
            "type": "Point",
              "coordinates": [
                0,0
              ]
            }
        }
       
    ]
    
      }));

      for(let i=0;i<this.city.length;i++){
   
        this.dat.features.push(JSON.parse(JSON.stringify({
         "type":"Feature",
         "properties":{"message":this.city[i].city,'iconSize': [25, 25],"confirmed":this.city[i].confirmed,"deaths":this.city[i].deaths,"recovered":this.city[i].recovered},
          "geometry":{"type":"Point", "coordinates":[this.city[i].longitude,this.city[i].latitude]}
       })))
         
       }
       //this.delete_marker();
    this.Marker_city();

  }

  Marker_city(){
     
     this.delete_marker();
      this.map.addSource('earthquakes1', {
      type: 'geojson',
      data:JSON.parse(JSON.stringify(this.dat)),
      });
  
      for (const marker of JSON.parse(JSON.stringify(this.dat.features))) {
        console.log("marker" )
        console.log(marker )
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = 'marker';
        el.style.backgroundImage = `url(https://www.shareicon.net/data/128x128/2016/08/18/814959_multimedia_512x512.png)`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
       
        
        el.style.backgroundSize = '100%';
         
        el.addEventListener('dblclick', () => {
          if(marker.geometry.coordinates[0]==-65.2696 && marker.geometry.coordinates[1]== -19.031){
           
            console.log("BOLIVIA!!!");
          }
        
        });
        
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML (
          `<div class:"mapboxgl-popup-content" style="color:black;margin:0,padding:0, font: 200 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif"><h2>Ciudad : ${marker.properties.message}</h2></div>
          <div class:"mapboxgl-popup-content" style="color:black;margin:0,padding:0, font: 200 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif"><h2>Confirmed : ${marker.properties.confirmed }</h2></div>
          <div class:"mapboxgl-popup-content" style="color:black;margin:0,padding:0, font: 200 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif"><h2>Deaths : ${marker.properties.deaths}</h2></div>
          <div class:"mapboxgl-popup-content" style="color:black;margin:0,padding:0, font: 200 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif"><h2>Recovered : ${marker.properties.recovered}</h2></div>`
          );

          popup.addClassName('mapboxgl-popup-content');
        const mark=new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(this.map);
        this.currentMarkers.push(mark);
        } 
  
  }



  contries_data(){
    this.countries.all().subscribe(
      data => {
        this.country = data;
        this.country_Geojson()
        console.log(this.country);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  country_Geojson(){
    this.dat=JSON.parse(JSON.stringify({
      "type": "FeatureCollection",
      features: [
        {
          "type": "Feature",
          "properties": {"message": "Null Island",'iconSize': [0, 0]},
          "geometry": {
            "type": "Point",
              "coordinates": [
                0,0
              ]
            }
        }
       
    ]
    
      }));
      console.log("Mostra imprimiendo countrys");
      console.log(this.country);
      for(let i=0;i<this.country.length;i++){
       
        this.dat.features.push(JSON.parse(JSON.stringify({
         "type":"Feature",
         "properties":{"message":this.country[i].locationName ,'iconSize': [50, 50]},
          "geometry":{"type":"Point", "coordinates":[this.country[i].longitude,this.country[i].latitude]}
       })))
         
       }
    
      this.Marker_country();
  }

  Marker_country(){
    this.delete_marker();
    this.map.on('load', () => {
      
      this.map.addSource('earthquakes', {
      type: 'geojson',
      data:JSON.parse(JSON.stringify(this.dat)),
      });
      
      for (const marker of JSON.parse(JSON.stringify(this.dat.features))) {
        console.log("marker" )
        console.log(marker )
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = 'marker';
        el.style.backgroundImage = `url(https://www.shareicon.net/data/128x128/2016/08/18/814959_multimedia_512x512.png)`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
       
        
        el.style.backgroundSize = '100%';
         
        el.addEventListener('dblclick', () => {
          if(marker.geometry.coordinates[0]==-65.2696 && marker.geometry.coordinates[1]== -19.031){
            //this.map.remove();
            this.map.setZoom(1);
            this.hospitales();
            this.map.flyTo({
              center: [-62.5062222,-17.0653827],
              zoom: 5
            });
            
          }
        
        });
        
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML (
          `<div class="mapboxgl-popup-content" style="color:black;margin:0,padding:0, font: 200 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif"><h2>${marker.properties.message}</h2></div>`
          );
        const mark=new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(this.map);
        this.currentMarkers.push(mark);
        } 
        
     });
  }

 
  delete_marker(){
    if (this.currentMarkers!==null) {
      for (var i = this.currentMarkers.length - 1; i >= 0; i--) {
        this.currentMarkers[i].remove();
      }
  }
  }

  CrearMrcador(lng:number, lat:number){
    const marker = new mapboxgl.Marker({
      draggable:true
    })
    .setLngLat([lng,lat])
    
    .addTo(this.map)

  }


  selectFiles(event:any){
    this.progressInfo = [];
    event.target.files.length == 1 ? this.filename = event.target.files[0].name : this.filename = event.target.file.length+"archivos";
    this.archivos.push(event.target.files[0])
    this.SelectFiles = event.target.files;
    //this.extraerBase64(event.target.files[0]).then( (imagen:any)=>{
      //console.log(imagen);
      //this.prev=imagen.base;
    //})

  }


 







}
