import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SucursalService } from '../../service/sucursal.service';

import {environment} from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl'
import { Router } from '@angular/router';


import { DomSanitizer } from '@angular/platform-browser';
import { EditServiceService } from 'src/app/service/edit-service.service';
import Swal from 'sweetalert2'
import { ListaNegocioService } from 'src/app/service/lista-negocio.service';
import { NegocioService } from 'src/app/service/negocio.service';
import { LocationServiceService } from 'src/app/service/location-service.service';
import { Observable, Subscriber } from 'rxjs';
import { ZonasServiceService } from '../../service/zonas-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {
    onChange($event:Event){
      this.file = ($event.target as HTMLInputElement)?.files?.[0];
      console.log(this.file);
      this.convertToBase64(this.file)

    }
    file:any;
    img:any;
    convertToBase64(file:File){
      const observable=new Observable((subscriber:Subscriber<any>)=>{
        this.readFile(file,subscriber);
      });
      observable.subscribe((d)=>{
        console.log(d);
        this.img=d;
      });
    }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader=new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload=()=>{
      subscriber.next(filereader.result);
      subscriber.complete();
    }
    filereader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
  }
//     point: {
//         x: 266,
//         y: 464
//     },
//      target: {...},
//      type: "click"
// }
imagen:any;
actualizarInfo() {
  console.log(this.imagen)
}


  
  datos_sucursal:any;

  lat:number=0;
  lon:number=0;
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
  areaid = 1;
  tipoproductoid = 1;
  nombreArea='';
  
  caracteristica='';
  cantidad = null;
  medida = '';
  negocioSeleccionado:any;
  negocios:any;


  inicio:any;
  fin:any;
  public form: FormGroup;
  constructor(private fb: FormBuilder,private zonasService:ZonasServiceService,private activatedRoute:ActivatedRoute,private sucursalService:SucursalService,private sanitizer:DomSanitizer, private router: Router,private editServiceService:EditServiceService,private listaNegocioService:ListaNegocioService,private negocioService:NegocioService,private locationServiceService:LocationServiceService) { 
    this.form = this.fb.group({
      rating: ['5', Validators.required],
    })
  }
  obtenerNegocios(){
    this.listaNegocioService.getNegociosDeUsuarioPorID(1).subscribe((data:any)=>{
      console.log(data)
      this.negocios=data
    })
    console.log("OBTENER NEGOCIOS");
    console.log(this.negocios);
  }
  location:any;
  listaZonas:any;
  zona_seleccionada:any;
  ngOnInit(): void {
    
    this.zonasService.obtenerZonas().subscribe((data:any)=>{
      this.listaZonas=data;
    });
    this.activatedRoute.params.subscribe( params => {
      this.sucursalService.getSucursalPorID(params['id']).subscribe((data:any)=>{
        //console.warn(data)
        this.datos_sucursal=data;
        this.mostrar=this.datos_sucursal.status;
        this.img="data:image/jpeg;base64,"+this.datos_sucursal.image;
        console.log(data);
        this.locationServiceService.getLocationID(this.datos_sucursal.idLocation).subscribe((l:any)=>{
          //console.warn(data)
          this.location=l;        
          console.log(this.location);
          this.cambiarPosicion(this.location.longitude,this.location.latitude);
        });
      });
    });
    this.obtenerNegocios();
    
    (mapboxgl as any).accessToken =environment.mapboxkey;
  
    this.map= new mapboxgl.Map({
    container: 'mapa-mapbox', // container ID
    //style: 'mapbox://styles/porceljhoan/ckund5chf15l117pkjr30so2i', // style URL
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-50.6462411, -21.7835007],// starting position
    zoom: 14,// starting zoom
    minZoom:2.8,
    
    });
    
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.doubleClickZoom.disable();

    this.map.on('click', (e) => {
      console.log(e);
      console.log("Imprimiendo log-lat")
      console.log(e.lngLat);
      console.log("Fin")
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
    this.contries_data();
    this.map= new mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      //style: 'mapbox://styles/porceljhoan/ckund5chf15l117pkjr30so2i', // style URL
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.negocios[0].longitude,this.negocios[0].latitude], // starting position
      zoom: 14,// starting zoom
      minZoom:2.8,
      
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.doubleClickZoom.disable();

    this.map.on('click', (e) => {
      console.log(e);
      console.log(e.lngLat.lng);
      console.log(e.lngLat.lat);
      this.cambiarPosicion(e.lngLat.lng,e.lngLat.lat);
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
  }

  cambiarPosicion(longitud:any,latitud:any){
    console.log(this.map);
    this.negocios[0].longitude=longitud;
    this.negocios[0].latitude=latitud;
    this.map= new mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      //style: 'mapbox://styles/porceljhoan/ckund5chf15l117pkjr30so2i', // style URL
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.negocios[0].longitude,this.negocios[0].latitude],// starting position
      zoom: 20,// starting zoom
      
      });
      this.country_Geojson()

      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.doubleClickZoom.disable();
  
      this.map.on('click', (e) => {
        console.log(e);
        console.log(e.lngLat.lng);
        console.log(e.lngLat.lat);
        this.cambiarPosicion(e.lngLat.lng,e.lngLat.lat);
      });
  }
  nombre_act:any;
  desc_act:any;
  tipo_act:any;
  mostrar:any;
  actualizar(){
    console.log("Actualizar--------------------------------------------");
    console.log(this.desc_act);
    console.log(this.inicio+":00");
    console.log(this.fin+":00");
    console.log(JSON.stringify(this.dias));
    this.img=this.img.replace("data:image/jpeg;base64,","");
    this.img=this.img.replace("data:image/jpg;base64,","");
    this.img=this.img.replace("data:image/png;base64,","");
    this.img=this.img.replace("data:image/svg;base64,","");

    console.log(this.img);
    console.log(this.zona_seleccionada)
    console.log(this.negocios[0].latitude)
    console.log(this.negocios[0].longitude)
    console.log(this.datos_sucursal.idLocation);
    console.log("2022-09-28")
    console.log(this.mostrar)
    console.log(this.datos_sucursal.idBusiness)
    let actualizar={
      "address": this.desc_act,
      "openHour": "2022-01-01T"+this.inicio+":00",
      "closeHour": "2022-01-01T"+this.fin+":00",
      // "attentionDays": JSON.stringify(this.dias),
      "attentionDays":"",
      "image":this.img,
      "idZone": Number(this.zona_seleccionada),
      "idLocation": this.datos_sucursal.idLocation,
      "idBusiness": this.datos_sucursal.idBusiness,
      "createDate": "2022-01-01",
      "updateDate": "2022-01-01",
      "status": (this.mostrar)?1:0
    }
  //   actualizar={
  //     "address": this.desc_act+"",
  //     "openHour": "2022-01-01T"+this.inicio+":00",
  //     "closeHour": "2022-01-01T"+this.fin+":00",
  //     "attentionDays": "d",
  //     "image": this.img,
  //     "idZone": 1,
  //     "idLocation": 1,
  //     "idBusiness": 1,
  //     "createDate": "2022-01-01",
  //     "updateDate": "2022-01-01",
  //     "status": 1
  // }
  
    let id=this.datos_sucursal.idBranch;
    console.log(id);
    console.log(actualizar);
    this.sucursalService.actualizarSucursal(id,actualizar).subscribe((data:any)=>{
      console.log(data)
    })
    // Swal.fire({
    //   title: 'Estas seguro?',
    //   text: "Quieres actualizar los datos de tu negocio?",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Si, actualizar!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
        
    //   }
    // })
    
  }
  dias={
    "lunes":true,
    "martes":true,
    "miercoles":true,
    "jueves":true,
    "viernes":true,
    "sabado":true,
    "domingo":true,
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
        //el.style.width = `${width}px`;
        el.style.width='10px';
        //el.style.height = `${height}px`;
        el.style.height='10px';
       
        
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
    /*this.countries.all().subscribe(
      data => {
        this.country = data;
        this.country_Geojson()
        console.log(this.country);
      },
      err => {
        console.log(err.error);
      }
    );*/
    this.negocios=this.editServiceService.all();
    this.negocios=JSON.parse(this.negocios);
    console.log(this.negocios);
    this.country_Geojson()

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
      //console.log(this.country);
      /*for(let i=0;i<this.negocios.length;i++){
       
        this.dat.features.push(JSON.parse(JSON.stringify({
         "type":"Feature",
         "properties":{"message":this.country[i].locationName ,'iconSize': [50, 50]},
          "geometry":{"type":"Point", "coordinates":[this.country[i].longitude,this.country[i].latitude]}
       })))
         
       }*/
      this.dat.features.push(JSON.parse(JSON.stringify({
        "type":"Feature",
        "properties":{"message":this.negocios[0].name ,'iconSize': [50, 50]},
         "geometry":{"type":"Point", "coordinates":[this.negocios[0].longitude,this.negocios[0].latitude]}
      })))
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
  buscar(){
    console.log(this.negocioSeleccionado);
    this.desc_act=this.negocioSeleccionado.description;
    this.mostrar=(this.negocioSeleccionado.status==1)?true:false;
    
  }


}
